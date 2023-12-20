<template>
<div>
    <headerv-2></headerv-2>
    <forgot-password-form></forgot-password-form>
    <footerv-2></footerv-2>
</div>
</template>

<script>
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.vue';
import Footerv2 from '../v2/Footerv2.vue';
import Headerv2 from '../v2/Headerv2.vue';
export default {
    components:{ForgotPasswordForm, Footerv2, Headerv2}

}
</script>

<style>

</style>