<template>
    <div id="discover">
        <Menutabs ref="menutabs"/>
        <router-view></router-view>
        <Foot ref="foot"/>
    </div>
</template>

<script>
import Menutabs from '@/components/tabs/tabs';
import Foot from '@/components/footer/footer';

export default {
    components: {
        Foot,
        Menutabs
    },
    data(){
        return {

        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
#discover {
    padding-top: 60px;
}
</style>