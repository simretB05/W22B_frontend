<template>
    <div class="main">
        <div class="login_card">
            <h2>Login-Form</h2>
            <div class="login">
                <label for="username"> User Name </label>
                <input ref="username_value" type="text" required placeholder="Enter Your User Name">
                <label for="first name"> Enter Your Password</label>
                <input ref="password_value" type="password" required placeholder="Enter Your User Password"> 
                <button @click="post_new_login" type="submit">submit</button> 
            </div>
        </div>
        <div class="signup-tosast">
            <toast-message  v-if="showToast" :title="toastTitle" :message="toastMessage"></toast-message>
        </div>
    
    </div>
</template>

<script>
import axios from "axios"
import Cookies from "vue-cookies"
import ToastMessage from  '@/components/ToastMessage.vue'
   export default {
    components: {
            ToastMessage
        },
    data() {
        return {
            showToast: false,
            toastMessage: undefined,
            toastTitle: undefined,
            client_data: [],

        }
    },
    mounted(){

    },
    methods: {
        post_new_login(){
            axios.request( {
                url: `${process.env.VUE_APP_BASE_URL}/api/login`,

                method: "POST",
                data: {
                    username: this.$refs["username_value"].value,
                    password: this.$refs["password_value"].value,
                }
            } ).then( (response) =>{
                let token = response[`data`][0]
                Cookies.set('token',token)
                this.$router.push(`/profile`)
            } ).catch( ( error ) =>{
                error
                this.toastTitle=` login error `
                this.toastMessage =` please provide the correct information`
                this.showToast = true

            } )
        }
    }
}
</script>

<style scoped>
  .main{
     min-height: 50vh;
     display: grid;
     place-items: center;
     width: 80%;
     border: 1px solid rgb(3, 3, 3);
  }
  .login_card{
    margin-top: 30px;
    align-self: start;
    width: 70%;

  }
  .login{
    display: grid;
     place-items: center;
     width: 100%;
     min-height:33vh;
  }
  label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: .9rem;
  justify-self: start;
  
}
input{
    width: 90%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    background-color: #f5f3f1;
    font-size: .8rem;
    justify-self: start;
}


button {
  display: block;
  width: 50%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
.signup-tosast {
  animation: toastSlideIn 0.5s ease-in-out;
  position: fixed;
  top: 108px;
  left: 0;
}

@keyframes toastSlideIn {
  0% {
    transform: translate(-100%, -100%);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>