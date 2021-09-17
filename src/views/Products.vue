<template>
  <div class="main-container">
    <div class="box">
      <div class="form">
        <iframe src="https://form.jotform.com/212386503284051" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import thirdBanner from "../components/third-banner.vue"

export default {
  components: { thirdBanner },
  props: [ 'title', 'text' ]
}
</script>

<style scoped>
  .main-container {
    padding-top: 50px; /*f or navbar */
    background-image: url('../assets/background/bg-design-left.png'), url('../assets/background/bg-design-right.png');
    background-repeat: no-repeat;
    background-position: left 50%, right 50%;
    background-size: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: calc(100vh - 100px);
  }

  .box {
    width: 90%;
    max-width: 800px;
    height: 100;
    margin: 15px 0;
    overflow: hidden;
    background-color: rgba(255,255,255,0.75);
    box-shadow: 0px 0px 33px -20px #000000;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: cursive;
  }

  .form {
    width: 100%;
    height: 1030px;
    overflow: hidden;
  }

  iframe {
    width: 100%;
    height: 1200px;
  }

  @media screen and (max-width: 854px) {
    .box {
      height: 1000px;
    }
   }

  @media screen and (max-width: 534px) {
    .box {
      height: 1700px;
    }

     iframe {
       height: 1800px;
     }
    .form {
      height: 1700px;
    }
    
  }

</style>