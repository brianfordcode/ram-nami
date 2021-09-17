<template>
  <div class="container">
    <div class="text-wrapper">
        <h1 class="customers">Customers Love Us!</h1>
        <img class="stars" src="../assets/main/5-star-rating.png" alt="">
        <h3 class="average">Average 4.9 Star Rating</h3>

        
        <carousel class="review-wrapper">
            <slide v-for="review in reviews" :key="review.id">
                <div class="review">
                    <h3>{{ review.text }}</h3>
                    <h3 class="review-name">{{ review.name }}</h3>
                </div>
            </slide>
            <template #addons>
                <navigation />
            </template>
        </carousel>

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
    background-image: url("../assets/background/bg-design-right.png"), url("../assets/main/orange-om-90-trans-back.png");
    background-size: 350px auto, 500px auto;
    background-position: right , left 50%;
    background-repeat: no-repeat, no-repeat;
    max-width: 1500px;
    margin: 0 auto;
    height: 500px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.text-wrapper {
    /* border: 1px solid blue; */
    height: 400px;
    margin: 0 10% 0 0;
    color: #2C3345;
    font-family: cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.stars {
    padding-top: 10px;
    width: 400px;
}

.review-wrapper {
    width: 400px;
}

.review {
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 33px -20px #000000;
    background-color: rgba(255,255,255,0.75);
    margin: 20px;
}

.review-name {
    text-align: right;
    padding-right: 50px;
}

@media screen and (max-width: 1000px) {
    .container {
        background-image: none;
    }
    .text-wrapper {
        margin: 0 auto;
        width: 100%;
    }
    .stars {
        width: 300px;
    }

    .review-wrapper {
        max-width: 500px;
        width: 100%;
    }

}




</style>


<!-- button styling -->

<style>
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
    background-color: black;
    opacity: 0.5;
    transition: .1s ease-in-out;
}

.carousel__prev:hover,
.carousel__next:hover {
    opacity: .75;
}

@media screen and (max-width: 1000px) {
    .carousel__prev {
        transform: translate(10px, -20px);
    }
    .carousel__next {
        transform: translate(-10px, -20px);
    }
}
</style>