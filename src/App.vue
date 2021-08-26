<template>

  <navBar class="nav-bar"/>
    <firstBanner/>
    <secondBanner/>
    <thirdBanner/>
    <fourthBanner/>
    <fifthBanner/>
  <bottomFooter/>


  <!-- <router-view/> -->

</template>

<style>

* {
  margin: 0;
  padding: 0;
}



</style>

<script>
import bottomFooter from './components/bottom-footer.vue'
import fifthBanner from './components/fifth-banner.vue'
import fourthBanner from './components/fourth-banner.vue'
import thirdBanner from './components/third-banner.vue'
import secondBanner from './components/second-banner.vue'
import firstBanner from './components/first-banner.vue'
import navBar from './components/nav-bar.vue'

export default {
  components: {
    navBar, firstBanner, secondBanner, thirdBanner, fourthBanner, fifthBanner, bottomFooter
  }
}
</script>
