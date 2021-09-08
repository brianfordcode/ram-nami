<template>
    <div class="main-container">
        <!-- FIRST BUTTON -->
        <router-link to="/about">
          <div class="img-container about">
            <div>About Us</div>
          </div>
        </router-link>
        <!-- SECOND BUTTON -->
        <router-link to="/products">
          <div class="img-container products">
            <div>Products</div>
          </div>
        </router-link>
        <!-- THIRD BUTTON -->
         <router-link to="/donate">
          <div class="img-container donate">
            <div>Where We Donate</div>
          </div>
        </router-link>

    </div>

</template>

<script>

</script>

<style scoped>

.main-container {
  height: 100%;
  max-width: 1500px;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1250px;
  
}

@media screen and (max-width: 700px) {
  .main-container {
    flex-direction: column;
    margin: 0 auto;
  }
  .img-container {
    margin: 10px 0;
  }
  
}

.img-container {
  height: 275px;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}

.about {
  background-image: url("../assets/main/red-ganesha.png");
  
}

.products {
  background-image: url("../assets/main/om-turquoise.png");
}

.donate {
  background-image: url("../assets/main/krishna-blue.png");
  text-align: center;
}

.img-container div {
  font-size: 30px;
  height: 90%;
  width: 90%;
  background-color: rgba(255,255,255,0.3);
  transition: .1s ease-in-out;
  font-family: cursive;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

a {
  text-decoration: none;
}


.img-container div:hover {
  transform: scale(1.15);
}


</style>