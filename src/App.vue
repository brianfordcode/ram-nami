<template>

  <navBar class="nav-bar"/>
  <!-- <router-view/> -->

  <firstBanner/>


  <router-view/>



</template>

<style>

* {
  margin: 0;
  padding: 0;
}


</style>

<script>
import firstBanner from './components/first-banner.vue'
import navBar from './components/nav-bar.vue'

export default {
  components: {
    firstBanner, navBar
  }
}
</script>
