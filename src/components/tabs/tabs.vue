<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="收藏夹" name="/discover/"></el-tab-pane>
        <el-tab-pane label="热门照片" name="/discover/popular-photo"></el-tab-pane>
        <el-tab-pane label="热门搜索" name="t3"></el-tab-pane>
        <el-tab-pane label="热门作者排行榜" name="t4"></el-tab-pane>
        <el-tab-pane label="挑战赛" name="t5"></el-tab-pane>
        <el-tab-pane label="免费视频" name="t6"></el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name: 'tabs',
    data(){
        return {
            activeName: '/discover/'
        }
    },
    methods: {
        handleClick(val){
            if (val.name){
                this.$router.push({ path: val.name });
            }
        }
    },
}
</script>

<style scoped>
.el-tabs {
    height: 110px;
    line-height: 110px;
    background: #e6ebee;
}
.el-tabs >>> .el-tabs__nav {
    transform: translateX(-50%) !important;
    position: relative;
    left: 50%;
}
.el-tabs >>> .el-tabs__item {
    font-size: 20px;
    font-weight: 600;
}
.el-tabs >>> .el-tabs__active-bar {
    background: transparent;
}
.el-tabs >>> .el-tabs__item.is-active,
.el-tabs >>> .el-tabs__item:hover {
    color: #d95729;
}
</style>