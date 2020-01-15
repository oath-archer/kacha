<template>
    <div id="about_tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="关于我们" name="/about/us"></el-tab-pane>
            <el-tab-pane label="许可证" name="/about/licence"></el-tab-pane>
            <el-tab-pane label="常见问题解答" name="/about/q&a"></el-tab-pane>
            <el-tab-pane label="热门作者排行榜" name="/about/leaderboard"></el-tab-pane>
            <el-tab-pane label="挑战赛" name="/about/challenge"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    data(){
        return {
            activeName: window.location.hash.split('#')[1]
        }
    },
    methods: {
        handleClick(val){
            if (val.name){
                this.$router.push({ path: val.name });
            }
        }
    }
}
</script>

<style scoped>
.el-tabs {
    height: 110px;
    line-height: 110px;
    background: #4d92a5;
}
.el-tabs >>> .el-tabs__nav {
    transform: translateX(-50%) !important;
    position: relative;
    left: 50%;
}
.el-tabs >>> .el-tabs__item {
    font-size: 20px;
    font-weight: 550;
}
.el-tabs >>> .el-tabs__active-bar {
    /* background: transparent; */
    top: 74px;
    background: #FFF;
}
.el-tabs >>> .el-tabs__item,
.el-tabs >>> .el-tabs__item.is-active,
.el-tabs >>> .el-tabs__item:hover {
    color: #FFF;
}
</style>