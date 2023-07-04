<template>
  <div class="register-login-section spad">
    <div class="container mx-auto">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="login-form">
            <h2>RESET PASSWORD</h2>
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit.prevent="handleSubmit"
              :hideRequiredMark="true"
            >
              <a-form-item class="group-input">
                <label for="username">Enter your email address *</label>
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

              <button
                type="submit"
                :class="[
                  loading ? 'site-btn-active disabled' : 'site-btn',
                  'login-btn',
                ]"
              >
                SEND EMAIL   <a-spin v-if="loading" /> 
              </button>
            </a-form>
            <div class="switch-login">
              <router-link to="sign-in" class="or-login"
                >Go back to Signin</router-link
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
          this.$store.dispatch("restPassword", values)
        }
      });
    },
  },
};
</script>

<style></style>
