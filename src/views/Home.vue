<template>

    <firstBanner/>
    <secondBanner/>
    <thirdBanner/>
    <fourthBanner/>
    <fifthBanner/>



</template>

<script>
import fifthBanner from '../components/fifth-banner.vue'
import fourthBanner from '../components/fourth-banner.vue'
import thirdBanner from '../components/third-banner.vue'
import secondBanner from '../components/second-banner.vue'
import firstBanner from '../components/first-banner.vue'

export default {
  name: 'Home',
  components: { firstBanner, secondBanner, thirdBanner, fourthBanner, fifthBanner }
}
</script>

<style scoped>
</style>