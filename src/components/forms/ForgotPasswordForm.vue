<template>
  <div class="register-login-section spad">
    <div class="container mx-auto">
      <div class="flex items-center justify-center h-fit">
        <div class=" w-full md:w-1/2 px-3">
          <div class="login-form">
            <h2 class="text-lg">Reset Password</h2>
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit.prevent="handleSubmit"
            
            >
              <a-form-item class="group-input">
                <label for="username">Email *</label>
                <a-input
                
                  v-decorator="[
                    'email',
                    {
                      rules: [
                        { required: true, message: 'Please input your email!' },
                      ],
                    },
                  ]"
                />
              </a-form-item>        
              <button
                type="submit"
                
                :class="[loading ? 'site-btn-active disabled' : 'site-btn', 'login-btn']"
              >
                Sign In   <a-spin v-if="loading" /> 
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

<script>
import {mapState} from 'vuex'
export default {
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
          this.$store.dispatch("resetPassword", values);
        }
      });
    },
  },
};
</script>

<style></style>
