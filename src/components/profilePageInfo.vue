<template>
    <div>
        <div v-for="(data,i) in client_data" :key="i">
            <h2>{{data[`username`]}}</h2> 
            <p>{{data[`email`]}}</p>
            <h1>{{data[`password`]}}</h1>
            <p>{{data[`bio`]}}</p>
            <img style="width:300px" :src="data[`image_url`]" alt=" profile image">

        </div>
         
    </div>
</template>

<script>
import Cookies from "vue-cookies"
import axios from "axios"
    export default {
        data() {
            return {
                token: undefined,
                client_data: [],
                showToast: false,
                toastMessage: undefined,
                toastTitle: undefined,
                
            }
    },
    methods: {
    get_clients_data(token) {
       axios.request({
            url: `${ process.env.VUE_APP_BASE_URL}/api/client`,
           params: {
                token:token[`token`]
          }
        })
        .then((response) => {
          this.client_data = response["data"];
        })
        .catch((error) => {
            this.toastTitle=`Error`
            this.toastMessage =error
            this.showToast = true
        });
    },
  },
  mounted() {
      let token = Cookies.get( 'token' )
      this.get_clients_data(token);

  },
}
    
</script>

<style  scoped>

</style>