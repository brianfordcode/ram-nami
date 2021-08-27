<template>

  <navBar class="nav-bar"/>
     <router-view/>
  <bottomFooter/>


 

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
