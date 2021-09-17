<template>

    <div class="main-container">

        <contactForm class="form"/>
        <img src="../assets/main/9_All_Colors_90_RAM_NAMI-500.png" alt="all-colors">

    </div>



</template>

<script>
import contactForm from "./contact-form.vue"
export default {
    components: {
        contactForm
    }
}
</script>

<style scoped>

.main-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px auto;
    max-width: 1500px;
}

img {
    height: 400px;
    border-radius: 20px;
}

@media screen and (max-width: 700px) {
    .main-container {
        background-image: url('../assets/main/9_All_Colors_90_RAM_NAMI-500.png');
        background-size: 100%;
        margin: 0;
    }
    .form {
        margin: 50px 0;
        border-radius: 10px;
    }

    img {
        display: none;

    }
    
}

</style>