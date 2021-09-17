<template>
   
   
   <div id="nav">
     <div class="container">
      <router-link to="/"><img class="rm-logo" src="../assets/logo/logo-trans-back.png" alt="rm-logo"/></router-link>
      <div class="links-container">
        <img @click="scrollToBottom" class="social mail" src="../assets/social/icons8-mail.svg"/>
        <a href="https://www.facebook.com/ramnamitradingco" target="_blank"><img class="social facebook" src="../assets/social/icons8-facebook.svg"/></a>
        <a href="https://www.instagram.com/ramnamitradingco" target="_blank"><img class="social instagram" src="../assets/social/icons8-instagram-logo.svg"/></a>
      </div>
     </div>
  </div>

</template>



<script>
export default {
  methods: {
    scrollToBottom() {
      this.windowHeight = document.body.scrollHeight 

    const scrollOptions = {
      top: this.windowHeight,
      behavior: "smooth"
    }

      window.scroll(scrollOptions);

    }
  }
}
</script>

<style scoped>

  #nav {
      position: fixed;
      height: 50px;
      width: 100%;
      background: white;
      z-index: 10000000;
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
    transition: .15s ease-in-out;
    cursor: pointer;
  }

  .social:hover {
    transform: scale(1.2);
  }


</style>