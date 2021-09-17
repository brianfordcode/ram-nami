<template>

<div class="app-container">
    <navBar class="nav-bar"/>
     <router-view/>
  <bottomFooter/>
</div>


</template>

<style>

* {
  margin: 0;
  padding: 0;
}


</style>

<script>
import bottomFooter from './components/bottom-footer.vue'
import navBar from './components/nav-bar.vue'

export default {
  components: {
    navBar, bottomFooter
  }
}
</script>
