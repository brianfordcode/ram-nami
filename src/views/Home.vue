<template>

    <quoteBanner/>
    <linksBanner/>
    <storesBanner/>
    <reviewsBanner/>
    <contactBanner/>



</template>

<script>
import contactBanner from '../components/contact-banner.vue'
import reviewsBanner from '../components/reviews-banner.vue'
import storesBanner from '../components/stores-banner.vue'
import linksBanner from '../components/links-banner.vue'
import quoteBanner from '../components/quote-banner.vue'

export default {

  name: 'Home',

  components: { quoteBanner, linksBanner, storesBanner, reviewsBanner, contactBanner }

}
</script>

<style scoped>
</style>