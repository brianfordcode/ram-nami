<template>
  <div class="container">
      <p>Visit Our Online Stores:</p>
      <div class="inner-wrapper">
          <a href="https://www.amazon.com" target="_blank"><img class="logo" src="../assets/stores/amazon-logo.png" alt="amazon"></a>
          <a href="https://www.etsy.com" target="_blank"><img class="logo" src="../assets/stores/etsy-logo.png" alt="amazon"></a>
          <a href="https://www.poshmark.com" target="_blank"><img class="logo" src="../assets/stores/poshmark-logo.png" alt="amazon"></a>
          <a href="https://www.mercari.com" target="_blank"><img class="logo" src="../assets/stores/mercari-logo.svg" alt="amazon"></a>
          <a href="https://www.ebay.com" target="_blank"><img class="logo" src="../assets/stores/ebay-logo.png" alt="amazon"></a>
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    height: 150px;
    box-shadow: ;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 33px -20px #000000;
}

p {
    margin-top: 10px;
    font-family: cursive;
    font-size: 25px;
}

.inner-wrapper {
    /* border: 1px solid blue; */
    height: 100%;
    width: 90%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.logo {
    height: auto;
    width: 100px;
    transition: .1s ease-in-out;
}

.logo:hover {
    transform: scale(1.1);
}
</style>