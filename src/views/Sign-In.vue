<template>
  <div>
    <Header></Header>
    <LoginForm></LoginForm>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import LoginForm from "../components/forms/Login-Form.vue";
export default {
  components: { Header, Footer, Breadcrum, LoginForm },
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

<style lang="scss" scoped>
body {
  background-color: #ffffff;
}
.sign-img {
  background-image: url("../../public/images/bg-signin.png");
  height: 80vh;
  background-size: cover;
}
</style>
