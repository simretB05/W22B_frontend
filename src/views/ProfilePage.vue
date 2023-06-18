<template>
    <div>
         <page-header></page-header>
            <profile-page-info></profile-page-info>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import profilePageInfo from '@/components/profilePageInfo.vue';
    export default {
    components: {
            PageHeader,
            profilePageInfo
        }
    }
</script>

<style scoped>
.main{
    min-height: 80vh;
    
}
</style>