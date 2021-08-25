<template>
  <div class="container">
    <div class="text-wrapper">
        <p class="customers">Customers Love Us!</p>
        <img class="stars" src="../assets/main/5-star-rating.png" alt="">
        <p class="average">Average 4.9 Star Rating</p>



        
        <div class="review-wrapper">
            <img class="arrow" src="https://img.icons8.com/fluency-systems-filled/48/000000/circled-left-2--v2.png"/>
            <div class="review" v-for="review in reviews"  :key="review.id">
                <p>{{ review.text }}</p>
                <p class="review-name">{{ review.name }}</p>
            </div>
            <img class="arrow" src="https://img.icons8.com/fluency-systems-filled/48/000000/circled-right-2--v2.png"/>
        </div>
            




    </div>
    

    <div class="background">
      <img class="bg-left" src="../assets/main/orange-om-90-trans-back.png" draggable="false" alt="bg-left">
      <img class="bg-right" src="../assets/background/bg-design-right.png" draggable="false" alt="bg-right">
    </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: [
                {   
                    id: 1,
                    text: "\"I'm a new customer and I absolutely love my scarf. Super fast delivery...I will definitely order again. Many thanks.\"",
                    name: "- Zoe"
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
    top: 50px;
    right: 150px;
    /* border: 1px solid blue; */
    /* height: 100%; */
    font-family: cursive;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.customers {
    font-size: 35px;
}

.stars {
    padding-top: 10px;
    width: 500px;
}

.average {
    font-size: 25px;
}

.review-wrapper {
    /* border: 1px solid black; */
    width: 550px;
    margin-top: 30px;
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
    font-size: 20px;
    width: 400px;
}

.review-name {
    text-align: right;
    padding-right: 50px;
}

</style>