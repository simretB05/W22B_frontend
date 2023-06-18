<template>
    <div class="main">
        <div class="signup_card">
            <h2>SignUp-Form</h2>
                <label for="first name">User name</label>
                <input ref="userName_value" type="text" required placeholder="enter your User Name">
                <label for="password">Password</label>
                <input ref="password_value" type="password" required placeholder="enter your User Password">
                <label for="email">Email</label>
                <input ref="email_value" type="text" required placeholder="enter your email">
                <label for="image">Your profile Image</label>
                <input type="text" ref="image_url_value" placeholder="enter your picture"> 
                <label for="bio">Bio</label>
                <input ref="bio_value" type="text" placeholder="bio">
                <button @click="post_new_client" type="submit">submit</button>
        </div>
        <div class="login-tosast">
            <toast-message  v-if="showToast" :title="toastTitle" :message="toastMessage"></toast-message>
        </div>

    </div>
</template>

<script>
import Cookies from "vue-cookies"
import axios from "axios"
import ToastMessage from  '@/components/ToastMessage.vue'


export default {
    components: {
            ToastMessage
        },
    data() {
        return {
            success_messsage: undefined,
            showToast: false,
            toastMessage: undefined,
            toastTitle: undefined,
            client_data:[]
        }
    },
    mounted(){

    },
    methods: {
        post_new_client(){
            axios.request( {
                url: `${process.env.VUE_APP_BASE_URL}/api/client`,

                method: "POST",
                data: {
                    username: this.$refs["userName_value"].value,
                    email: this.$refs["email_value"].value,
                    password: this.$refs["password_value"].value,
                    bio: this.$refs["bio_value"].value,
                    image_url: this.$refs["image_url_value"].value,
                },
            } ).then( (response) =>{
                this.toastTitle=` Sign up success`
                this.toastMessage = "Log-in to go to your profile"
                this.showToast = true 
                this.client_data = response[`data`]
                Cookies.set('client',this.client_data )

            } ).catch( ( error ) => {
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
     border: 1px solid green;
  }
  .signup_card{
    margin-top: 30px;
    align-self: start;
    width: 77%;

  }
  .signup-card {
    display: grid;
  justify-items: center;
  width: 70%;
  margin: 32px auto;
  padding: 20px;
  background-color: #fcfcfb;
  border: 1px solid #7ed957;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
  font-weight: bold;
  margin-bottom: 5px;
    
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


button{
display: block;
  width: 40%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;

}
.login-tosast {
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