<template>
    <div>
        <Header></Header>
        <template>
  <div class="register-login-section spad">
    <div class="container mx-auto">
      <div class="flex items-center justify-center h-fit">
        <div class="w-1/2">
          <div class="login-form">
            <h2 class="text-lg">Reset Your Password</h2>
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit.prevent="handleSubmit"
            
            >
              <a-form-item class="group-input">
                <label for="username">New Password *</label>
                <a-input-password
                  v-decorator="[
                    'password',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                        {
                          min: 8,
                          message: 'Password must be 8 characters or more',
                        },
                      ],
                    },
                  ]"
                  autocomplete="off"
                ></a-input-password>
              </a-form-item>        
              <button
                type="submit"
                
                :class="[loading ? 'site-btn-active disabled' : 'site-btn', 'login-btn']"
              >
                SEND EMAIL   <a-spin v-if="loading" /> 
              </button>
            </a-form>
            <div class="switch-login">
              <router-link to="sign-in" class="or-login"
                >Back to Login</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        <Footer></Footer>
    </div>
    </template>
    
    <script>
    import Header from "../components/home/Header.vue";
    import Footer from "../components/home/Footer.vue";
    import Breadcrum from "../components/Widgets/Breadcrum.vue";
    import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.vue';
    import {mapState} from "vuex"
import { auth } from "../database";
import { confirmPasswordReset } from "firebase/auth";
import router from "../router";
  
    export default {
        components:{Header,Footer,Breadcrum, ForgotPasswordForm},
        data() {
    return {
      // Binded model property for "Sign In Form" switch button for "Remember Me" .
      rememberMe: true,
      email:""
    };
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  computed:{
...mapState(["loading"])
  },
  methods: {
    // Handles input validation after submission.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch("resetPassword", values)
          const oobCode = this.$route.query.oobCode;
          confirmPasswordReset(auth,oobCode,values.password).then(()=>{
            router.push('/sign-in')
          }).catch((err)=>{
            console.log(err)
          })
          
        }
      });
    },
  },
    
    }
    </script>
    
    <style>
    
    </style>