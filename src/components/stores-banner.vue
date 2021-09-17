<template>
  <div class="container">
      <p>Visit Our Online Stores:</p>
      <div class="inner-wrapper">
          <a href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3ARam+Nami&ref=bl_sl_s_ap_web_7141123011" target="_blank"><img class="logo" src="../assets/stores/amazon-logo.png" alt="amazon"></a>
          <a href="https://www.etsy.com/shop/RamNami?ref=simple-shop-header-name&listing_id=813219514" target="_blank"><img class="logo" src="../assets/stores/etsy-logo.png" alt="amazon"></a>
          <a href="https://poshmark.com/closet/ramnami" target="_blank"><img class="logo" src="../assets/stores/poshmark-logo.png" alt="amazon"></a>
          <a href="https://www.mercari.com/u/651837242/" target="_blank"><img class="logo" src="../assets/stores/mercari-logo.svg" alt="amazon"></a>
          <a href="https://www.ebay.com/usr/ramnami" target="_blank"><img class="logo" src="../assets/stores/ebay-logo.png" alt="amazon"></a>
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 33px -20px #000000;
    /* border: 1px solid green; */
}

p {
    margin-top: 10px;
    font-family: cursive;
    font-size: 25px;
    color: #2C3345;
}

.inner-wrapper {
    /* border: 1px solid blue; */
    height: 100%;
    margin: 20px;
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    /* padding: 20px; */
}

.logo {
    height: auto;
    width: 100px;
    transition: .1s ease-in-out;
    /* border: 1px solid purple; */
    margin: 15px;
}

.logo:hover {
    transform: scale(1.1);
}
</style>