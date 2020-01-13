<template>
    <div id="discover">
        <Menutabs ref="menutabs"/>
        <router-view></router-view>
        <!-- <Foot ref="foot"/> -->
    </div>
</template>

<script>
import Menutabs from '@/components/tabs/tabs';

export default {
    components: {
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