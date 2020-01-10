<template>
	<el-dialog
		:visible.sync="imagesDialog"
		top="10px"
		width="85%"
		>
		<div class="photo-title clearfix">
			<div class="level-left">
				<el-avatar :size="60" src="https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg" @error="errorHandler">
					<img src="../../assets/images/empty.png"  alt="头像">
				</el-avatar>
				<div class="avatar-info">
					<h3 class="photo-name">AHMED MOUSTAFA</h3>
					<div class="photo-concern">
						<span>21</span>
						位关注者
					</div>
				</div>
			</div>
			<div class="level-right">
				<el-button icon="el-icon-thumb">
					<span>211</span>
					人点赞
				</el-button>
				<el-button icon="el-icon-circle-plus-outline">加放收藏夹</el-button>
				<el-dropdown split-button type="primary" :hide-on-click="false" @click="handleClick">
					免费下载
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<el-radio v-model="radio" label="1">原图</el-radio>
						</el-dropdown-item>
						<el-dropdown-item>
							<el-radio v-model="radio" label="2">大图</el-radio>
						</el-dropdown-item>
						<el-dropdown-item>
							<el-radio v-model="radio" label="3">中图</el-radio>
						</el-dropdown-item>
						<el-dropdown-item>
							<el-radio v-model="radio" label="4">小图</el-radio>
						</el-dropdown-item>
						<el-dropdown-item>
							<el-button type="primary">免费下载</el-button>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<div class="photo-page">
			<img :src="imgSrc" alt="">
		</div>
	</el-dialog>
</template>

<script>
export default {
    name: 'imginfo',
    data(){
        return {
			radio: '',
			imgSrc: '',
			imagesDialog: false
        }
	},
	methods: {
		errorHandler(){
			return true;
		},
		handleClick(){
			alert('免费下载')
		}
	},
	watch: {
		imagesDialog(val){
			//console.log(val)
		}
	},
}
</script>

<style scoped>
.photo-title {
	position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 30px);
    padding: 15px 15px 0 15px;
}
.level-left,
.el-avatar,
.avatar-info {
	float: left;
}
.avatar-info {
	height: 60px;
    line-height: 30px;
    padding-left: 15px;
}
.photo-name {
	font-size: 16px;
    font-weight: 600;
}
.level-right {
	float: right;
}
.level-right .el-dropdown {
	margin-left: 10px;
}
.photo-page {
	padding: 15px;
	text-align: center;
}
</style>