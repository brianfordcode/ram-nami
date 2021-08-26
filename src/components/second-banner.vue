<template>
    <div class="main-container">
        <!-- FIRST BUTTON -->
        <div class="img-container">
            <div class="img-wrapper">
                <div class="border">
                  <p>About Us</p>
                </div>
                <img src="../assets/main/red-ganesha.png" alt="red-ganesha"> 
            </div>
        </div>
        <!-- SECOND BUTTON -->
        <div class="img-container">
            <div class="img-wrapper">
                <div class="border">
                  <p>Our Products</p>
                </div>
                <img src="../assets/main/om-turquoise.png" alt="red-ganesha"> 
            </div>
        </div>
        <!-- THIRD BUTTON -->
        <div class="img-container">
            <div class="img-wrapper">
                <div class="border">
                  <p>Where We Donate</p>
                </div>
                <img src="../assets/main/krishna-blue.png" alt="red-ganesha"> 
            </div>
        </div>
              
            
        
    </div>
  
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },

}
</script>

<style scoped>

.main-container {
  height: 400px;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1250px;

}

.img-container {
  overflow: hidden;
  position: relative;
}

.border {
  background-color: rgba(255,255,255,0.3);
  font-family: cursive;
  font-size: 27px;
  position: absolute;
  height: 90%;
  width: 90%;
  margin: 5%;
  transition: .1s ease-in-out;
}

p {
    color: rgb(43, 43, 43);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    /* border: 1px solid green; */
}

.img-wrapper {
    transition: .1s ease-in-out;
    cursor: pointer;
}

.img-wrapper:hover {
  transform: scale(1.15);
}

.border:hover {
    background-color: rgba(255, 255, 255, 0.4);
}

p:hover {
    color: black;
}



</style>