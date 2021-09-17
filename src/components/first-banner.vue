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
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.quote {
    /* height: 100%; */
    margin-left: 10%;
    font-family: cursive;
    font-size: 35px;
    color: #2C3345;
    text-align: right;
    border-radius: 20px;
    background-color: rgba(255,255,255,0.65);
    box-shadow: 0px 0px 33px -20px #000000;
    padding: 15px;
}

@media screen and (max-width: 700px) {
.container {
    justify-content: space-around;
  }

  .quote {
    text-align: center;
    margin: 0 50px;
    font-size: 25px;
  }

}

</style>