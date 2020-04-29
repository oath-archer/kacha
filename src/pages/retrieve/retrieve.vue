<template>
	<div id="retrieve" class="pt-60">
		<div class="retrieve-box">
			<el-steps :active="active" align-center>
				<el-step title="选择找回方式"></el-step>
				<el-step title="重置密码"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>
			<div class="retrieve-type" v-if="active == 1 || active == 2">
				<div class="email">
					<img src="../../assets/images/email-0.png" alt="email">
				</div>
				<div class="phone">
					<img src="../../assets/images/phone-1.png" alt="email">
				</div>
			</div>
			<div class="e-type" v-if="type == 1">
				<div class="input-box" v-if="active == 1">
					<input type="text" class="account" placeholder="请输入您绑定的邮箱">
					<p>* 在收到邮件之后，请点击邮件中的地址找回密码</p>
				</div>

				<div class="step-2" v-if="active == 2">
					<input type="password" class="newPw" placeholder="请输入新密码">
					<input type="password" class="newPw-ag" placeholder="请再次输入密码">
				</div>

				<div class="step-3" v-if="active == 3">
					<img src="../../assets/images/success.png" alt="" srcset="">
					<p>恭喜您，密码重置成功！</p>
				</div>
			</div>
			<div class="p-type" v-if="type == 2">
				<div class="input-box" v-if="active == 1">
					<input type="text" class="account" placeholder="请输入您绑定的手机号码">
					<div class="txyzm">
						<input type="text" id="" placeholder="请输入图形验证码">
						<button class="custom-btn">adcd</button>
					</div>
					<div class="sent">
						<input type="text" placeholder="请输入验证码">
						<button class="custom-btn">发送验证码</button>
					</div>
				</div>

				<div class="step-2" v-if="active == 2">
					<input type="password" class="newPw" placeholder="请输入新密码">
					<input type="password" class="newPw-ag" placeholder="请再次输入密码">
				</div>

				<div class="step-3" v-if="active == 3">
					<img src="../../assets/images/success.png" alt="" srcset="">
					<p>恭喜您，密码重置成功！</p>
				</div>
			</div>
		</div>
		<div class="btn-box">
			<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
		</div>
	</div>
</template>

<script>
export default {
    data(){
		return {
			type: 1,
			active: 1
		}
	},
	methods: {
		next(){
			if (this.active++ > 2) {
				this.active = 1;
			}
		}
	},
}
</script>

<style>
.retrieve-box {
	width: 1280px;
	margin: 0 auto;
	padding: 50px;
	border-top: 0px;
	box-sizing: border-box;
	border: 1px solid #dfdfdf;
}
.el-step .is-finish .el-step__icon.is-text {
	background: #4f93a6;
	border-color: #4f93a6;
}
.el-step  .el-step__head.is-finish {
	border-color: #4f93a6;
}
.el-step .el-step__title.is-finish {
	color: #4f93a6;
}
.el-step .is-finish .el-step__icon-inner {
	color: #fff;
}
.el-step .is-text.el-step__icon {
	background: #cccccc;
	border-color: #cccccc;
}
.el-step  .el-step__head {
	border-color: #cccccc;
}
.el-step .el-step__title {
	color: #cccccc;
}
.el-step .el-step__icon-inner {
	color: #fff;
}
.btn-box {
	width: 1280px;
	margin: 0 auto;
	padding: 20px 50px;
	box-sizing: border-box;
	text-align: center;
}
.btn-box button {
	width: 50%;
	color: #FFF;
	background: #5093a6;
    border-color: #5093a6;
}
.btn-box button:hover,
.btn-box button:focus {
	color: #fff;
    border-color: #43889c;
    background-color: #43889c;
}
.retrieve-type {
	display: flex;
    width: 50%;
    height: 200px;
    margin: 110px auto 70px;
    align-items: center;
}
.retrieve-type > div {
	flex: 1;
	padding: 63px 0;
	text-align: center;
}
.phone {
	border-left: 1px solid #eee;
}
.input-box,
.step-2,
.step-3 {
	width: 50%;
    margin: 0 auto;
}
.input-box .account {
    width: 100%;
    font-size: 20px;
	padding: 20px 15px;
    border-radius: 2px;
    border: 1px solid #eee;
	box-sizing: border-box;
}
.input-box p {
	padding-top: 15px;
    color: #ccc;
	font-size: 18px;
}
.step-2 input {
	padding: 20px 15px;
    font-size: 20px;
    border: 1px solid #eee;
    border-radius: 2px;
    width: 100%;
	margin-bottom: 15px;
}
.step-3 {
	text-align: center;
	padding: 180px 0 90px 0;
}
.step-3 p {
	color: #4e93a6;
	font-size: 20px;
	font-weight: 600;
	padding-top: 15px;
}
.txyzm,
.sent {
	margin-top: 10px;
}
.txyzm input,
.sent input {
	width: 100%;
	padding: 19px 15px;
	border: 1px solid #dfdfdf;
    width: calc(100% - 164px);
}
.p-type .custom-btn {
	width: 120px;
	color: #FFFFFF;
    font-size: 16px;
    margin-left: 10px;
    padding: 20px 15px;
    background: #4f93a6;
    border: 1px solid #4f93a6;
}
</style>