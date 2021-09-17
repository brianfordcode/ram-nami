<template>
  <div class="main-container">
    <div class="box">
        <h1 class="title">{{ title }}</h1>
        <p class="text">{{ text }}</p>
        <storesBanner class="stores"/>
    </div>
  </div>
</template>

<script>
import storesBanner from "./stores-banner.vue"

export default {
  components: { storesBanner },
  props: [ 'title', 'text' ]
}
</script>

<style scoped>
  .main-container {
    padding-top: 50px; /* for navbar */
    background-image: url('../assets/background/bg-design-left.png'), url('../assets/background/bg-design-right.png');
    background-repeat: no-repeat;
    background-position: left 50%, right 50%;
    background-size: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: calc(100vh - 100px);
    overflow: hidden;
  }

  .box {
    width: 90%;
    max-width: 800px;
    margin: 15px 0;
    height: min-content;
    background-color: rgba(255,255,255,0.75);
    box-shadow: 0px 0px 33px -20px #000000;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: cursive;
    overflow: hidden;
  }

  .title {
    padding: 30px;
  }

  .text {
    padding: 0 50px 50px 50px;
    text-align: center;
  }

  .stores {
    width: 100%;
    margin-top: 20px;
  }

</style>