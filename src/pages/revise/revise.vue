<template>
    <div id="revise">
        <div class="revise-box">
			<h1 class="title">修改密码</h1>
			<p>
				<span class="tit">原密码</span>
				<span class="sub-tit">必须输入原密码才能修改</span>
			</p>
			<div class="">
				<input type="text" placeholder="">
			</div>
			<p>
				<span class="tit">请输入新密码</span>
				<span class="sub-tit">最小长度为6个字符</span>
			</p>
			<div class="">
				<input type="password" class="" placeholder="">
			</div>

			<p>
				<span class="tit">再次输入新密码</span>
				<span class="sub-tit">请再次输入新密码</span>
			</p>
			<div class="">
				<input type="password" placeholder="">
			</div>
		</div>
		<div class="btn-group">
			<button class="cencl">取消</button>
			<button class="ok">确定</button>
		</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#revise {
	padding-top: 60px;
    width: 1280px;
    margin: auto;
}
.revise-box {
	padding: 170px 330px;
    border: 1px solid #dfdfdf;
    border-top: 0;
}
.title {
	font-size: 30px;
	font-weight: 600;
	color: #4e93a6;
}
.revise-box > p {
	font-size: 20px;
	font-weight: 600;
	margin: 40px 0 15px;
}
.revise-box > div > input {
    width: 100%;
    font-size: 20px;
    border-radius: 4px;
	padding: 20px 12px;
    border: 1px solid #dfdfdf;
}
.tit {
	color: #4e93a6;
}
.sub-tit {
	color: #cccccc;
	margin-left: 15px;
}
.btn-group {
	padding: 40px 0;
	text-align: center;
}
.btn-group button {
	width: 340px;
    padding: 18px 0;
    font-size: 30px;
	border-radius: 5px;
    border: 1px solid #dfdfdf;
}
.cencl {
	color: #CCCCCC;
	background: #FFF;
}
.ok {
	margin-left: 20px;
	color: #FFFFFF;
	background: #4f93a6;
}
</style>