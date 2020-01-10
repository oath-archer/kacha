<template>
    <div id="home">
        <header class="banner">
            <div class="banner_bg">
				<!-- <img src="../../assets/images/banner.jpeg" alt=""> -->
			</div>
			<section class="banner_content">
				<h1 class="banner_title">感谢摄影朋友</h1>
				<h1 class="banner_title">免费分享最精彩的照片</h1>
				<div class="banner_search">
					<el-input
						placeholder="免费搜索照片和视频"
						suffix-icon="el-icon-search"
						v-model="keyword">
					</el-input>
				</div>
			</section>
        </header>
		<!-- 筛选 -->
		<div class="screen">
			<el-button type="text">人气</el-button>
			<el-divider direction="vertical"></el-divider>
			<el-button type="text">最新</el-button>
		</div>
		<!-- 瀑布流 -->
		<Waterfall ref="waterfall"/>
		<!-- 回到顶部 -->
		<el-backtop :bottom="100">
			<div style="{
				height: 100%;
				width: 100%;
				background-color: #f2f5f6;
				box-shadow: 0 0 6px rgba(0,0,0, .12);
				text-align: center;
				line-height: 40px;
				color: #1989fa;
			}"
			>
			UP
			</div>
		</el-backtop>
    </div>
</template>

<script>
import Waterfall from '@/components/waterfall/waterfall'
export default {
	name: 'home',
	components: {
		Waterfall
	},
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        
    },
    mounted() {
		this.$parent.$refs.navbar.navClass = 'h';
		//this.navClass = 'h';
    },
    watch: {
        
    }
}
</script>

<style scoped>
.banner {
	color: #FFF;
	position: relative;
    height: 100%;
    overflow: hidden;
    max-height: 500px;
    min-height: 380px;
	display: flex;
    align-items: center;
    justify-content: center;
}
.banner_bg {
	position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    max-height: 500px;
	min-height: 380px;
	background: url(../../assets/images/banner.jpeg) no-repeat;
	background-size: 100% 100%;
}
.banner_bg img {
	width: 100%;
	height: 100%;
}
.banner_title {
	display: block;
    font-size: 36px;
    line-height: 48px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 15px;
}
.banner_content {
	max-width: 650px;
    width: 100%;
    z-index: 2;
}
.banner_search .el-input >>> input {
	height: 54px;
	font-size: 16px;
	line-height: 54px;
}
.banner_search .el-input >>> .el-input__icon {
	font-size: 22px;
    padding: 0 10px
}
.screen {
	padding: 20px 0;
	text-align: center;
}
.screen .el-button--text {
	color: #333;
	font-size: 16px;
}
</style>