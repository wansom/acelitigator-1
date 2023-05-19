<template>
  <!-- Payment Methods Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0 }"
  >
    <div>
      <a-modal v-model="visible" on-ok="initiatePayment">
        <template slot="footer">
          <a-button key="back" @click="handleCancel"> Cancel </a-button>
          <a-button
            key="submit"
            type="primary"
            :loading="loading"
            @click="confirmPayment"
            v-if="sdkSent"
          >
            verify payment
          </a-button>
          <a-button
            type="primary"
            :loading="loading"
            @click="intiatePayment"
            v-else
          >
            Proceed to Checkout
          </a-button>
        </template>
        <a-skeleton active v-if="loading" />
        <a-result
          status="info"
          title="KES 1500.00!"
          :sub-title="
            'a notification will be sent to your phone number registered ' +
            user.phone +
            'enter MPESA PIN to complete payment'
          "
          v-else
        >
        </a-result>
       
      </a-modal>
    </div>
    <template #title>
      <a-row type="flex" align="middle" class="d-flex align-items-center">
        <a-col :span="24" :md="12" class="my-5">
          <h6 class="font-semibold mb-5">Account Subscription</h6>
          <p>Make payment to complete your profile</p>
          <a-alert message="Your early adopter's promo code is: dialalawyer9c97a@"
          description="enter the promo code to start 2 months free trial"
           type="warning" show-icon close-text="Copy Code"  @close="onClose" />
        </a-col>
        <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <!-- <a-button type="primary" @click="confirmPayment">
            VERIFY PAYMENT
          </a-button> -->
        </a-col>
      </a-row>
    </template>
    <a-row :gutter="[24, 24]">
      <a-col :span="24" :md="16">
        
        <a-card class="payment-method-card p-2">
          
          <a-input class="mr-2" v-model.trim="coupon"/>
          <a-button type="primary" @click="payWithCard"> Enter Code</a-button>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
  <!-- Payment Methods Card -->
</template>

<script>
import {getMpesaReference,getTransactionReference,getTransactions} from "@/database/firestore"
import {arrayUnion} from "firebase/firestore"
export default {
  props: ["user"],
  data() {
    return {
      visible: false,
      loading: false,
      sdkSent:false,
      coupon:""
    };
  },
  methods: {
    onClose() {
      const textarea = document.createElement('textarea');
  textarea.textContent = "dialalawyer9c97a@";
  textarea.style.position = 'fixed';
  textarea.style.top = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
    },
    showModal() {
      if (!this.user.biography) {
            this.$message.error(
              "please complete the general information section"
            );
          } else if (!this.user.law_school) {
            this.$message.error("please complete the education section");
          } else if (!this.user.law_school) {
            this.$message.error("please complete the employment section");
          } else {
            this.visible = true;
            this.loading=false
          }
    },
    formatNumber(value){
      if(value.startsWith("254")){
        return value
      }else if(value.startsWith("07")){
        return  "254" +value.substring(1)
      }else if(value.startsWith("+254")){
        return  "254" +value.substring(2)
      }else if(value.startsWith("01")){
        return  "254" +value.substring(1)
      }else{
        return value
      }
    },
    openNotification() {
      swal( 'The details you submit to us will only be used for account verification. Please confirm to proceed').then(()=>{
        this.payWithCard()
      })
    },
    sendMail(){
      this.$store.dispatch("sendMail",{
              name: this.user.first_name,
                email: this.user.email,
                subject: "Dial A Lawyer Account",
                content:`Your payment has been received successfully on ${new Date().toDateString()} . Our admin will review your documents and give you feedback within 48 hours`
  
            })
            this.$store.dispatch("sendMail",{
              name: "Admin",
                email: "owarren@barizicommunications.com",
                subject: "Account creation",
                content:`A new account has been created on  ${new Date().toDateString()} .Please login to the main site to review application.`
  
            })
    },
    payWithCard(){
      if(!this.user.biography){
        this.$message.error("please fill out the general information section")
      }else if(!this.user.current_employer){
        this.$message.error("please fill out the employment information section")
      }
      else if(!this.user.law_school){
        this.$message.error("please fill out the education information section")
      }
      else if(!this.user.practise_number){
        this.$message.error("some documents are not uploaded. upload them to complete registration")
      }else{
        if(this.coupon=="dialalawyer9c97a@"){
        this.paymentConfirmed = true;
            localStorage.clear()
            this.$store.dispatch("updateUser", {
                status: "pending approval",
                payment_date: new Date(),
                current: 5,
                notifications:arrayUnion({
                  notification:`payment has been made succcessfully,Our admin will review your application and give feedback`,
                  date:new Date()

                }),
                invoices:arrayUnion({
                  date: new Date(),
                  amount:0,
                  number: this.coupon
                })
              });
              this.sendMail()
              this.visible=false
            
             

      }else{
        swal({
              title: "OOPS!",
              text: `Coupon code is unavailable or has expired`,
              icon: "error",
            });

      }
      }
      


    
    },
    intiatePayment() {
      this.loading = true;
        this.$store
          .dispatch("intiatePayments", {
            amount: 5,
            phone_number: this.formatNumber(this.user.phone) ,
          })
          .then((response) => {
            // handle success
            if (response.status == 200) {
              let id = response.data.CheckoutRequestID;
              localStorage.setItem("transactionID", JSON.stringify(id));
              this.sdkSent=true
              this.loading = false;
              // this.visible=false
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            swal({
              title: "OOPS!",
              text: `something went wrong`,
              icon: "error",
            });
          });
    },
    confirmPayment() {
      let id = JSON.parse(localStorage.getItem("transactionID"));
      getMpesaReference(id).then((data)=>{
        if (data) {
            if (data.resultCode == 1032) {
              swal({
                title: "SORRY!",
                text: `You have cancelled the transaction,please try again`,
                icon: "error",
              });
              this.sdkSent=false
              this.visible=false
            } else if (data.resultCode == 1037) {
              swal({
                title: "SORRY!",
                text: `DS timeout user cannot be reached`,
                icon: "error",
              });
              this.sdkSent=false
              this.visible=false
            } else {
              this.verifyAmount();
            }
          } else {
            swal({
              title: "SORRY!",
              text: `No transaction record found`,
              icon: "error",
            });
          }

      })
    },
    handleChecks(){
      if(!this.user.biography){
        this.$message.error("please fill out the general information section")

      }else if(!this.user.current_employer){
        this.$message.error("please fill out the employment information section")
      }
      else if(!this.user.law_school){
        this.$message.error("please fill out the education information section")
      }
      else if(!this.user.practise_number){
        this.$message.error("some documents are not uploaded. upload them to complete registration")
      }else{
        this.intiatePayment()
      }
    },
    verifyAmount() {
      let id = JSON.parse(localStorage.getItem("transactionID"));
      getTransactionReference(id).then((data)=>{
        if (data && data.amount == 5) {
            this.paymentConfirmed = true;
            localStorage.clear()
            this.$store.dispatch("updateUser", {
                status: "pending approval",
                payment_date: new Date(),
                notifications:arrayUnion({
                  notification:`payment has been made succcessfully,Our admin will review your application and give feedback`,
                  date:new Date()

                }),
                invoices:arrayUnion({
                  date: new Date(),
                  amount:data.amount,
                  number: id
                })
              });
              this.sendMail()
              this.visible=false
              location.reload()
          } else {
            swal({
              title: "SORRY!",
              text: `Wrong amount`,
              icon: "error",
            });
          }

      })
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>
