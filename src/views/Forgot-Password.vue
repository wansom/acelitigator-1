<template>
<div>
    <Header></Header>
    <forgot-password-form></forgot-password-form>
    <Footer></Footer>
</div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Breadcrum from "../components/Widgets/Breadcrum.vue";
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.vue';
export default {
    components:{Header,Footer,Breadcrum, ForgotPasswordForm}

}
</script>

<style>

</style>