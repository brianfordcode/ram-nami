<template>
  <div class="container">
    <div class="text-wrapper">
        <p class="customers">Customers Love Us!</p>
        <img class="stars" src="../assets/main/5-star-rating.png" alt="">
        <p class="average">Average 4.9 Star Rating</p>

        
        <carousel class="review-wrapper">
            <slide v-for="review in reviews" :key="review.id">
                <div class="review">
                    <p>{{ review.text }}</p>
                    <p class="review-name">{{ review.name }}</p>
                </div>
            </slide>
            <template #addons>
                <navigation />
            </template>
        </carousel>
            




    </div>
    

    <div class="background">
      <img class="bg-left" src="../assets/main/orange-om-90-trans-back.png" draggable="false" alt="bg-left">
      <img class="bg-right" src="../assets/background/bg-design-right.png" draggable="false" alt="bg-right">
    </div>

  </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';




export default {
    components: { 
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            reviews: [
                {   
                    id: 1,
                    text: "\"I'm a new customer and I absolutely love my scarf. Super fast delivery...I will definitely order again. Many thanks.\"",
                    name: "- Zoe"
                },
                {   
                    id: 1,
                    text: "\"Beautiful scarf, I love it!\"",
                    name: "- Bridgett"
                },
                {   
                    id: 1,
                    text: "\"Exactly as described and shipping was super fast! Thank you so much, RamNami!!\"",
                    name: "- Lisa"
                },
            ]
        }
    }

}
</script>

<style scoped>

.container {
    max-width: 1500px;
    margin: 0 auto;
    position: relative;
    color: #2C3345;
}

.background {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 500px;
}

.bg-right {
    opacity: 0.15;
    height: 400px;
    z-index: -1;
}

.bg-left {
    height: 100%;
}

.text-wrapper {
    position: absolute;
    top: 30px;
    right: 150px;
    font-family: cursive;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.customers {
    font-size: 30px;
}

.stars {
    padding-top: 10px;
    width: 400px;
}

.average {
    font-size: 20px;
}

.review-wrapper {
    height: 100%;
    width: 400px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.arrow {
    opacity: 0.5;
    cursor: pointer;
    transition: .1s ease-in-out;
}
.arrow:hover {
    transform: scale(1.1);
}

.review {
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 33px -20px #000000;
    background-color: rgba(255,255,255,0.75);
    text-align: center;
    width: 350px;
    font-size: 20px;
    margin: 20px;
}

.review-name {
    text-align: right;
    padding-right: 50px;
}

</style>


<!-- button styling -->
<style>
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
    background-color: black;
    opacity: 0.5;
}
</style>