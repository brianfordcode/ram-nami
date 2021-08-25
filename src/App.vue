<template>

  <navBar class="nav-bar"/>
  <!-- <router-view/> -->
    <firstBanner/>
    <secondBanner/>
    <thirdBanner/>
    <fourthBanner/>
  


  <!-- <router-view/> -->



</template>

<style>

* {
  margin: 0;
  padding: 0;
}



</style>

<script>
import fourthBanner from './components/fourth-banner.vue'
import thirdBanner from './components/third-banner.vue'
import secondBanner from './components/second-banner.vue'
import firstBanner from './components/first-banner.vue'
import navBar from './components/nav-bar.vue'

export default {
  components: {
    navBar, firstBanner, secondBanner, thirdBanner, fourthBanner
  }
}
</script>
