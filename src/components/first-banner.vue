<template>
  <div class="container">

    <p class="quote">"We are dedicated to bringing you the
      <br>
      most authentic Indian products" 
      </p>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    background-image: url("../assets/main/yellow-om-trans.png"), url("../assets/background/bg-design-left.png");
    background-size: 400px auto, 350px auto;
    background-position: right 50px, left 50%;
    background-repeat: no-repeat, no-repeat;
    height: 500px;
    padding-top: 50px;
    max-width: 1500px;
    margin: 0 auto;
}

.quote {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid blue; */
    font-family: cursive;
    font-size: 35px;
    color: #2C3345;
    text-align: right;
    max-width: 80%;
    margin: 0 auto;
}

</style>