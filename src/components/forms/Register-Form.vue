<template>
  <div class="register-login-section spad">
    <div class="container mx-auto">
      <div class="flex items-center justify-center">
        <div class="w-1/2">
          <div class="register-form">
            <h2>CREATE ACCOUNT</h2>
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit="handleSubmit"
            >
            <a-row type="flex" justify="space-between" :gutter="16">
              <a-col :span="24" :sm="{ span: 24 }" :lg="{ span: 12 }">
                <a-form-item class="group-input"  label="First Name">
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
                   placeholder='Your First Name(required)'
                />
              </a-form-item></a-col>
              <a-col :span="24" :sm="{ span: 24 }" :lg="{ span: 12 }">
                <a-form-item class="group-input" label="last Name">
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
                   placeholder='Your Last Name(required)'
                />
              </a-form-item>
              </a-col>
            </a-row>

           
              <a-form-item class="group-input"  label="Email">
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
                  placeholder='Your Email(required)'
                />
              </a-form-item>
              <a-form-item class="group-input"  label="Password">
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
                  placeholder='Enter Password(required)'
                
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input-password>
              </a-form-item>
              <a-form-item class="group-input"  label="Confirm Password">
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
import { mapState } from 'vuex';
export default {
  data() {
    return {
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