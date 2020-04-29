<template>
    <div id="account">
		<div class="account-box">
			<p class="username">weilingym</p>
			<p class="introduce">改变世界！</p>
			<div class="headimg">
				<el-avatar :size="size" :src="circleUrl"></el-avatar>
			</div>
			<div class="icon-group">
				<div class="icon-item">
					<p class="icon1"></p>
					<p>0</p>
				</div>
				<div class="icon-item">
					<p class="icon2"></p>
					<p>0</p>
				</div>
				<div class="icon-item">
					<p class="icon3"></p>
					<p>0</p>
				</div>
				<div class="icon-item">
					<p class="icon4"></p>
					<p>0</p>
				</div>
				<div class="icon-item">
					<p class="icon5"></p>
					<p>0</p>
				</div>
			</div>
		</div>
		<div class="account-tabs">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="我的图片" name="/myPhotos"></el-tab-pane>
				<el-tab-pane label="上传" name="/upload"></el-tab-pane>
				<el-tab-pane label="收藏" name=""></el-tab-pane>
				<el-tab-pane label="关注" name=""></el-tab-pane>
				<el-tab-pane label="设置" name=""></el-tab-pane>
			</el-tabs>
		</div>
		<router-view class="view"></router-view>
    </div>
</template>

<script>
export default {
    data(){
		return {
			size: 100,
			activeName: window.location.hash.split('#')[1],
			circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
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
#account {
	background: #e5e5e5;
}
.account-box {
	width: 50%;
    margin: auto;
	color: #FFF;
	margin-top: 60px;
	padding: 35px 0 70px;
    text-align: center;
}
.username {
	font-size: 50px;
	margin-bottom: 8px;
}
.introduce {
	font-size: 18px;
	margin-bottom: 15px;
}
.icon-group {
	width: 50%;
    margin: auto;
	display: flex;
	padding-top: 15px;
}
.icon-item {
	flex: 1;
}
.icon-item > p:first-child {
	padding: 30px 0;
}
.icon1 {
	background: url(../../assets/images/icon1.png) center no-repeat;
}
.icon2 {
	background: url(../../assets/images/icon2.png) center no-repeat;
}
.icon3 {
	background: url(../../assets/images/icon3.png) center no-repeat;
}
.icon4 {
	background: url(../../assets/images/icon4.png) center no-repeat;
}
.icon5 {
	background: url(../../assets/images/icon5.png) center no-repeat;
}
.icon-item > p:last-child {
	font-size: 20px;
	font-weight: 600;
}
.account-tabs {
	background: #FFF;
	border-bottom: 1px solid #dfdfdf;
}
.el-tabs {
	width: 25%;
    margin: auto;
}
.el-tabs >>> .el-tabs__header {
	margin: 0;
}
.el-tabs >>> .el-tabs__nav {
	width: 100%;
}
.el-tabs >>> .el-tabs__active-bar {
	background-color: transparent;
}
.el-tabs >>> .el-tabs__item {
	width: 20%;
	height: 80px;
	font-size: 20px;
	line-height: 80px;
	text-align: center;
}
.el-tabs >>> .el-tabs__item.is-active {
	color: #4f93a6;
}
.el-tabs >>> .el-tabs__item:hover {
	color: #4f93a6;
}
.el-tabs >>> .el-tabs__nav-wrap::after {
	height: 0;
}
.view {
	background: #FFF;
}
</style>