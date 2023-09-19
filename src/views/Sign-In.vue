<template>
  <div>
    <headerv-2></headerv-2>
    <LoginForm></LoginForm>
    <footerv-2></footerv-2>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import LoginForm from "../components/forms/Login-Form.vue";
import Headerv2 from '../v2/Headerv2.vue';
import Footerv2 from '../v2/Footerv2.vue';
export default {
  components: { Header, Footer, Breadcrum, LoginForm, Headerv2, Footerv2 },
  data() {
    return {
      title: 'Account',
      description: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market',
      url: 'https://dialalawyer.africa',
      image: 'https://dialalawyer.africa/images/banner.jpg',
      // Binded model property for "Sign In Form" switch button for "Remember Me" .
      rememberMe: true,
      loading: this.$store.state.loading,

    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
      { name: 'description', content: 'Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market' },
  // Open Graph (for Facebook, LinkedIn, etc.)
  { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: this.image },
        { property: 'og:url', content: this.url },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: this.image },
        { name: 'twitter:url', content: this.url },
        // Add more tags as needed
      ]
    }
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
