<template>
  <div>
    <headerv-2></headerv-2>
    <main class="container mx-auto px-28">
        <law-firm-form></law-firm-form>
    </main>
    <footerv-2></footerv-2>
  </div>
</template>

<script>
import LawFirmForm from '../components/forms/LawFirmForm.vue'
import Footerv2 from '../v2/Footerv2.vue'
import Headerv2 from '../v2/Headerv2.vue'
export default {
  components: { Headerv2, Footerv2, LawFirmForm },

}
</script>

<style>

</style>