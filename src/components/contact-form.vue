<template>
<div class="container">

  <form ref="form" @submit.prevent="sendEmail">
    <h1>Contact Us</h1>
    <p>ramnamitradingco@gmail.com</p>
    <div>
        <!-- <label>Name: </label> -->
        <input type="text" name="user_name" v-model="user_name" placeholder="Your Name" required>
    </div>
    
    <div>
        <!-- <label>Email: </label> -->
        <input type="email" name="user_email" v-model="user_email" placeholder="Your Email" required>
    </div>
    
    <div>
        <!-- <label>Message: </label> -->
        <textarea name="message" class="text-area" v-model="message" placeholder="Your Message" required></textarea>
    </div>
    
    <input class="send-btn" type="submit" value="Send" >
    <div class="success" v-if="success">Message Has Been Sent!</div>
    
  </form>

</div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    data() {
        return {
            user_name: '',
            user_email: '',
            message: '',
            success: false
        }
    },
  methods: {
    sendEmail() {
        emailjs.sendForm('service_qcnsih9', 'template_xoiah98', this.$refs.form, 'user_aQwSzeTqX3xfbm7gH2QjN')
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
            setTimeout(()=> {
                this.user_name = ''
                this.user_email = ''
                this.message = ''
                this.success = true
            }, 900)
            }
  }
}
</script>

<style scoped>
  form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: min-content;
      height: 100%;
      padding: 10px;
      border-radius: 10px;
      background-color: white;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  h1 {
      font-family: cursive;
      /* text-align: center; */
      margin: 0 auto;
  }
  p {
      font-family: sans-serif;
      margin: 0 auto;
      letter-spacing: .25px;
      margin: 5px;
  }
  form div {
      display: flex;
      flex-direction: column;
      margin: 5px;
  }
  form div input {
      width: 200px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid orange;
      outline: none;
  }
  .text-area {
      min-width: 200px;
      min-height: 100px;
      max-width: 300px;
      max-height: 150px;
      outline: none;
      padding: 10px;
      margin-top: 20px;
      border: 1px solid orange;
      font-family: sans-serif;
  }
  .send-btn {
      margin: 0 auto;
      padding: 10px 30px;
      font-family: cursive;
      font-size: 15px;
      outline: none;
      border: none;
      background-color: green;
      color: white;
      cursor: pointer;
      transition: .15s ease-in-out;
      margin-top: 10px;
  }
  .send-btn:hover {
      transform: scale(1.1);
    }
    .success {
        font-family: cursive;
        margin: 0 auto;
        padding: 10px;
    }
</style>