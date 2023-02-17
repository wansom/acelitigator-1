<template>
  <div class="register-login-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="login-form">
            <h2>Login</h2>
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit.prevent="handleSubmit"
              :hideRequiredMark="true"
            >
              <a-form-item class="group-input">
                <label for="username">Username or email address *</label>
                <a-input
                  type="text"
                  id="username"
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
                  type="password"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input-password>
              </a-form-item>
              <div class="group-input gi-check">
                <div class="gi-more">
                  <label for="save-pass">
                    Save Password
                    <input type="checkbox" id="save-pass" />
                    <span class="checkmark"></span>
                  </label>
                  <router-link to="forgot-password" class="forget-pass">Forget your Password</router-link>
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
export default {
  data() {
    return {
      // Binded model property for "Sign In Form" switch button for "Remember Me" .
      rememberMe: true,
      loading: this.$store.state.loading,
    };
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal_login" });
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
