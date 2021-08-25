<template>
  <div class="container">

    <p class="quote">"We are dedicated to bringing you the
      <br>
      most authentic Indian products" 
      </p>

    <div class="background">
      <img class="bg-left" src="../assets/background/bg-design-left.png" draggable="false" alt="bg-left">
      <img class="bg-right" src="../assets/main/yellow-om-trans.png" draggable="false" alt="bg-right">
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    padding-top: 50px;
    max-width: 1500px;
    margin: 0 auto;
    position: relative;
}

.background {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 500px;
}

.bg-left {
    opacity: 0.15;
    height: 400px;
}

.bg-right {
    height: 100%;
}

.quote {
    position: absolute;
    /* border: 1px solid blue; */
    font-family: cursive;
    font-size: 35px;
    top: 220px;
    left: 15%;
    text-align: right;
}

</style>