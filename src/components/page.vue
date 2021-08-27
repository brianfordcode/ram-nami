<template>

  <div class="main-container">

    <div class="box">
      <div class="text">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <thirdBanner class="stores"/>
      </div>
      
    </div>

    <div class="background">
      <img draggable="false" src="../assets/background/bg-design-left.png" alt="bg-design-left">
      <img draggable="false" src="../assets/background/bg-design-right.png" alt="bg-design-right">
    </div>

  </div>

</template>

<script>
import thirdBanner from '../components/third-banner.vue'


export default {
  components: { thirdBanner },
  props: ['title', 'text']
}
</script>

<style scoped>

.main-container {
  padding-top: 50px; 
  position: relative;
}

.box {
  height: 500px;
  
  width: 700px;
  border-radius: 20px;
  box-shadow: 0px 0px 33px -20px #000000;
  /* opacity: 0.75; */
  background-color: white;
  z-index: 100000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0; 
  right: 0; 
  /* margin: auto; */
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
}

.text {
  color: #2C3345;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

h1 {
  padding-top: 20px;
  font-family: cursive;
}

p {
  font-family: arial;
  padding: 0 50px ;
  text-align: center;
}

.stores {
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

/* BACKGROUND */
.background {
  height: calc(100vh - 100px); /* account for navbar and footer */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  height: 70%;
  opacity: 0.2;
}



</style>