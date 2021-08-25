<template>
   <div id="nav">
     <div class="container">
      <img class="rm-logo" src="../assets/logo/logo-trans-back.png" alt="rm-logo"/>
      <div class="links-container">
        <a href="/" target="_blank"><img class="social mail" src="../assets/social/icons8-mail.svg"/></a>
        <a href="https://www.facebook.com"><img class="social facebook" src="../assets/social/icons8-facebook.svg"/></a>
        <a href="https://www.instagram.com"><img class="social instagram" src="../assets/social/icons8-instagram-logo.svg"/></a>
      </div>
     </div>
  </div>


<!-- <router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link> -->



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
      box-shadow: 0px 0px 33px -20px #000000;
  }

  .container {
    /* border: 1px solid blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
    height: 100%;
    padding: 0px 50px;
  }

  .rm-logo {
    height: 35px;
  }

  .social {
    height: 25px;
    margin: 0 5px;
    transition: .15s ease-in-out
  }

  .social:hover {
    transform: scale(1.2);
  }


</style>