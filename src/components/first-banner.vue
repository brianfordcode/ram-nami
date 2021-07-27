<template>
  <div class="container">
      <div class="background">
          <img class="bg-design" id="left" draggable="false" src='../assets/background/bg-design-left.png' alt="bg-design-left">
          <img class="bg-design" id="right" draggable="false" src='../assets/main/yellow-om-trans.png' alt="yellow-om-trans">
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    height: 100%;
    margin: 0 auto;
    max-width: 1600px;
    overflow: hidden;
}

.background {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border: 3px solid blue;
    height: 100vh;
}


#left {
    height: 70%;
    min-height: 350px;
    opacity: 0.25;
}

#right {
    height: 100vh;
    min-height: 350px;
    margin-top: 100px;

}


</style>