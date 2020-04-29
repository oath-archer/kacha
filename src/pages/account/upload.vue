<template>
    <div id="upload">
        <div class="upload-tips">
			<h1 class="title">把你最好的作品展示出来</h1>
			<p>您的上传将根据予影许可免费发布。 <span @click="toLicence" style="color: #4f93a6;cursor: pointer;">简明规则</span></p>
			<p>我只上传我拥有的权利的图片，而不是任何购买或者复制的图像。</p>
			<p>我们将审核您的提交。如果选择它，您将收到一封电子邮件通知，并且您的内容将出现在我的搜索中。</p>
			
			<el-button size="large" class="btn btn-yuying">上传您的作品</el-button>
		</div>
		<!-- <div class="msg">
			<p>很抱歉，您的一些图片没有批准</p>
		</div> -->
		<div class="upload-info">
			<div class="photos">
				<img src="../../assets/images/demo.png" alt="">
				<div class="tips">错误：上传内容的大小必须至少为400万像素</div>
				<!-- <div class="tips">不符合我们的质量标准</div> -->
			</div>
			<div class="labels">
				<p>
					<span class="tit">标签</span>
					<span class="sub-tit">至少为5个词语</span>
				</p>
				<div class="">
					<input type="text" placeholder="">
				</div>
				<p>
					<span class="tit">位置</span>
					<span class="sub-tit">城市或地名</span>
				</p>
				<div class="">
					<input type="text" placeholder="">
				</div>
				<button class="btn btn-yuying">发布</button>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    data(){
		return {

		}
	},
	methods: {
		toLicence(){
			this.$router.push({ path: '/about/licence' });
		}
	},
}
</script>

<style scoped>
#upload {
	padding-top: 70px;
}
.upload-tips {
	width: 1280px;
	margin: auto;
	color: #515457;
	text-align: center;
}
.upload-tips .title {
	font-size: 30px;
	margin-bottom: 30px;
}
.upload-tips p {
	font-size: 20px;
}
.btn-yuying {
	width: 50%;
	border: 1px;
    height: 55px;
    font-size: 22px;
	margin-top: 40px;
	color: #ffffff;
    background: #4f93a6;
}
.btn-yuying:hover,
.btn-yuying:focus {
    color: #FFF;
    background: #61acc1;
}

.upload-info {
	margin: auto;
	display: flex;
	width: 1280px;
	padding: 80px 0 128px;
}
.photos {
	flex: 1;
	position: relative;
}
.photos img {
	width: 100%;
	display: block;
}
.tips {
	padding: 18px 0;
    text-align: center;
    background: rgba(79, 146, 166, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #FFF;
}
.labels {
	flex: 1;
	padding-top: 40px;
    padding-left: 40px;
}
.labels p {
	font-size: 20px;
	margin-bottom: 10px;
}
.labels .tit {
	color: #4f93a6;
}
.labels .sub-tit {
	color: #cccccc;
}
.labels input {
	width: 100%;
    font-size: 20px;
    border-radius: 4px;
	padding: 20px 12px;
	margin-bottom: 20px;
    border: 1px solid #dfdfdf;
}
</style>