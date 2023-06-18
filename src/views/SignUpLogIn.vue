<template>
    <div >
        <div class="logout-tosast">
                <toast-message  v-if="showToast" :title="toastTitle" :message="toastMessage"></toast-message>
            </div>
        <page-header>
            
        </page-header>
        <div class="main_card">
            <sign-up-form></sign-up-form>
            <log-in-form></log-in-form>
        </div>
     
    </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue'
import LogInForm from '@/components/LogInForm.vue';
import PageHeader from '@/components/PageHeader.vue';
import ToastMessage from  '@/components/ToastMessage.vue'

export default {
    components: {
            SignUpForm,
            PageHeader,
            LogInForm,
            ToastMessage 
    },
    data() {
        return {
            showToast: false,
            toastMessage: undefined,
            toastTitle: undefined,
        }
    },
    methods: {
        get_log_out(){
          this.showToast= true,
            this.toastTitle=` logout success`
            this.toastMessage = "Logged out"
        }
    },
    mounted() {
        this.$root.$on("log_out", this.get_log_out);
     }
    }
</script>
  
<style scoped>

.main_card{
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 80vh;
    grid-template-columns: 1fr 1fr;

}
.logout-tosast {
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