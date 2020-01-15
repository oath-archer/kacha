<template>
    <div id="about">
        <AboutTabs ref="about"/>
        <router-view></router-view>
    </div>
</template>

<script>
import AboutTabs from '@/components/aboutTabs/tabs'
export default {
    components: {
        AboutTabs
    }
}
</script>

<style scoped>
#about {
    padding-top: 60px;
}

</style>