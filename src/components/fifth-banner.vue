<template>



    <div class="container">
        <div class="form">
            <iframe src="https://form.jotform.com/212376876521057" frameborder="0"></iframe>
            <div class="mobile">
                <span>Contact us at:</span>
                <br>
                <a href="mailto:ramnamitradingco@gmail.com">ramnamitradingco@gmail.com</a>
            </div>
        </div>
        <img src="../assets/main/9_All_Colors_90_RAM_NAMI-500.png" alt="all-colors">

    </div>



</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    margin: 15px auto 25px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1500px;
    height: 100%;
}

.form {
    height: 710px;
    overflow: hidden;
    
}

iframe {
    height: 800px;
    width: 500px;
}

.mobile {
    display: none;
}

.mobile span {
    font-size: 30px;
}

.mobile a {
    text-decoration: none;
    color: black;
    font-size: 20px;
}

.mobile a:hover{ 
    color: orange;
} 

img {
    height: 500px;
    border-radius: 20px;
}


@media screen and (max-width: 1000px) {
    .container {
        margin: 0;
        background-image: url("../assets/main/9_All_Colors_90_RAM_NAMI-500.png");
        background-repeat: no-repeat;
        background-size: 1000px 100%;
        background-position: center;
    }

    img {
        display: none;
    }

    .form{
        margin: 20px;
    }

}

@media screen and (max-width: 600px) {
    .container {
        position: relative;
        height: 400px;
        /* width: 100%; */
    }

    .form {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: rgba(255,255,255,0.7);
        border-radius: 20px;
        height: 40px;
        padding: 50px;
    }

    iframe {
        display: none;
    }

    .mobile {
        display: initial;
        font-family: cursive;
        text-align: center;
    }
}

</style>