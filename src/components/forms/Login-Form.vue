<template>
  <div class="register-login-section spad">
    <div class="container mx-auto">
      <div class="flex items-center justify-center">
        <div class="w-full md:w-1/2 px-10">
          <div class="login-form">
            <h2 class="text-lg">Login</h2>
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
              <a-form-item class="group-input">
                <label for="pass">Password *</label>
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
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input-password>
              </a-form-item>
              <div class="group-input gi-check">
                <router-link to="forgot-password" class="forget-pass">Forget your Password</router-link>
                <div class="gi-more">
                 
                </div>
              </div>

            
              <button
                type="submit"
                
                :class="[loading ? 'site-btn-active disabled' : 'site-btn', 'login-btn']"
              >
                Sign In   <a-spin v-if="loading" /> 
              </button>
            </a-form>
            <div class="switch-login">
              <router-link to="sign-up" class="or-login"
                >Or Create An Account</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      // Binded model property for "Sign In Form" switch button for "Remember Me" .
      rememberMe: true,
      form:this.$form.createForm(this, { name: "normal_login" })
    };
  },
  beforeCreate() {

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
          this.$store.dispatch("login", values);
        }
      });
    },
  },
};
</script>

<style></style>