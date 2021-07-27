<template>
   <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  #nav {
      position: fixed;
      height: 50px;
      width: 100%;
      background: white;
      z-index: 50;
  }


</style>