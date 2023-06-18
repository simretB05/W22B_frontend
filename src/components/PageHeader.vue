<template>
       <header >
        <div class="login-tosast">
            <toast-message  v-if="showToast" :title="toastTitle" :message="toastMessage"></toast-message>
        </div>
        <div v-if="token">
              <button @click="log_client_out" class="btn">logout</button>
         </div>
       </header>
    
</template>

<script>
import ToastMessage from  '@/components/ToastMessage.vue'
import Cookies from "vue-cookies"
import axios from "axios"

export default {
    components: {
        ToastMessage

    },
        data() {
        return {
            token: undefined,
            showToast:false,

            }
    },
    methods: {
     log_client_out(){
        axios.request({
            url: `${ process.env.VUE_APP_BASE_URL }/api/login`,
            method:"delete",
            data: {
                token:this.token[`token`]
            }
        }).then( ( response ) => {
                if ( response ) {
                    this.$root.$emit("log_out");
                }
        }).catch((error) => {
            this.toastTitle=`Error`
            this.toastMessage =error
            this.showToast = true
        } );
            Cookies.remove( 'token' )
            this.$router.push(`/`)
        }

    },
        
    mounted(){

        this.token = Cookies.get( 'token' )
        }
    }
    
</script>

<style  scoped>
header{
    display:grid;
    place-items:center;
    position: sticky;
    min-height:10vh;
    padding: 16px;
    grid-template-columns:repeat(auto-fit, minmax(50px, 1fr));
    background-color: rgb(168, 130, 130);
 }
 .btn{
    width: 100px;
    padding: 10px;
    border: none;
    border-radius:15px ;
 }
</style>