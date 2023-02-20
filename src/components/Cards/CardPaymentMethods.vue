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
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12" class="my-5">
          <h6 class="font-semibold mb-5">Account Subscription</h6>
          <p>Your account has been approved ,make payment to activate it</p>
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
      <!-- <a-col :span="24" :md="8">
        <a-card class="payment-method-card">
          <img src="images/logos/mastercard-logo.png" alt="" />
          <h6 class="card-number">CREDIT CARD</h6>
          <a-button type="dashed" @click="payWithCard"> PAY </a-button>
        </a-card>
      </a-col> -->
      <a-col :span="24" :md="8">
        <a-card class="payment-method-card">
          <img src="images/mpesa.png" alt="" />
          <h6 class="card-number">MPESA</h6>
          <a-button type="dahsed" @click="showModal"> Pay </a-button>
        </a-card>
      </a-col>
      <!-- <a-col :span="24" :md="8">
        <a-card class="payment-method-card">
          <h6 class="card-number">DIRECT BANK TRANSFER</h6>
          <a-button type="dashed" @click="payWithCard"> PAY </a-button>
        </a-card>
      </a-col> -->
    </a-row>
  </a-card>
  <!-- Payment Methods Card -->
</template>

<script>
import * as fb from "../../firebase";
export default {
  props: ["user"],
  data() {
    return {
      visible: false,
      loading: false,
      sdkSent:false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
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
    payWithCard(){
      swal({
              title: "OOPS!",
              text: `Payment method not available`,
              icon: "error",
            });
            let date=new Date().setMonth(new Date().getMonth() + 1)
            console.log(new Date(date).toDateString())
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
            console.log(response);
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
      console.log(id);
      fb.mpesaCollection
        .doc(id)
        .get()
        .then((doc) => {
          if (doc.exists) {
            let data = doc.data();
            console.log(data.resultDesc);
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
        });
    },
    verifyAmount() {
      let id = JSON.parse(localStorage.getItem("transactionID"));
      fb.transactions
        .doc(id)
        .get()
        .then((doc) => {
          let data = doc.data();
          console.log(data)
          if (doc.exists && data.amount == 5) {
            this.paymentConfirmed = true;
            let user = fb.auth.currentUser;
            fb.usersCollection
              .doc(user.uid)
              .update({
                status: "active",

                subscription_date: new Date(new Date().setMonth(new Date().getMonth() + 1)).toDateString(),
                notifications:fb.types.FieldValue.arrayUnion({
                  notification:`payment has been made succcessfully,your acoount is active till new ${Date(new Date().setMonth(new Date().getMonth() + 1))}`,
                  date:new Date()

                }),
                invoices:fb.types.FieldValue.arrayUnion({
                  date: new Date(),
                  amount:data.amount,
                  number: id
                })
              })
              .then(() => {
                let user = fb.auth.currentUser;
                this.$store.dispatch("fetchUserProfile", user);
                this.$store.dispatch("sendMail",{
              name: this.user.first_name,
                email: this.user.email,
                subject: "Acelitigator Account",
                content:`Your Account has been activated successfully valid till ${new Date(new Date().setMonth(new Date().getMonth() + 1))}`
  
            })
              });
          } else {
            swal({
              title: "SORRY!",
              text: `Wrong amount`,
              icon: "error",
            });
          }
        });
    },
    handleCancel() {
      this.visible = false;
    },
  },
};
</script>
