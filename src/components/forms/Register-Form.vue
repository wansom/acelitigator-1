<template>
  <div class="register-login-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="register-form">
            <h2>CREATE ACCOUNT</h2>
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit="handleSubmit"
            >
              <a-form-item class="group-input">
                <label for="username">First Name *</label>
                <a-input
                  type="text"
                  id="username"
                  v-decorator="[
                    'first_name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your  first name!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item class="group-input">
                <label for="username">Last Name *</label>
                <a-input
                  type="text"
                  id="username"
                  v-decorator="[
                    'last_name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your last name!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item class="group-input">
                <label for="username">Email address *</label>
                <a-input
                  type="text"
                  v-decorator="[
                    'email',
                    {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
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
                        {
                          validator: validateToNextPassword,
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
              <a-form-item class="group-input">
                <label for="con-pass">Confirm Password *</label>
                <a-input
                  id="con-pass"
                  v-decorator="[
                    'confirm',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        {
                          validator: compareToFirstPassword,
                        },
                      ],
                    },
                  ]"
                  type="password"
                  @blur="handleConfirmBlur"
                  placeholder="Re-Type Password"
                />
              </a-form-item>
              <button type="submit" :class="[loading?'site-btn-active disabled' : 'site-btn', 'register-btn']">
                REGISTER  <a-spin v-if="loading"/> 
              </button>
            </a-form>
            <div class="switch-login">
              <router-link to="sign-in" class="or-login">Or Login</router-link>
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
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
        this.$store.dispatch("signUp", values);
      
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
  },
};
</script>

<style></style>
