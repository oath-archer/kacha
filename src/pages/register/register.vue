<template>
    <div id="register">
        <div class="reg-bg">
            <div class="reg-box clearfix">
                <div class="left">
                    <h2>联系我们</h2>
                    <p>
                        <i class="el-icon-message"></i>
                        yuyingpic@163.com
                    </p>
                </div>
                <div class="right">
                    <h2>将你的照片展现给更多的人帮助别人激发灵感，给自己带来客户</h2>
                    <el-form :model="regForm" ref="regForm" class="regForm">
                        <el-form-item>
                            <el-input v-model="regForm.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="regForm.phone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="regForm.verification" placeholder="请输入验证码"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="regForm.password" placeholder="请输入密码" show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="regForm.password2" placeholder="请再次输入密码" show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="large" class="btn btn-yuying">注册</el-button>
                        </el-form-item>
                    </el-form>
                    <!-- <div class="reg-form">
                        <input type="text" placeholder="请输入用户名">
                        <input type="text" placeholder="请输入手机号">
                        <input type="text" placeholder="请输入验证码">
                        <input type="passowrd" placeholder="请输入密码">
                        <input type="passowrd" placeholder="请再次输入密码">
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            regForm: {
                username: '',
                phone: '',
                verification: '',
                password: '',
                password2: ''
            }
        }
    }
}
</script>

<style scoped>
#register {
    padding-top: 60px
}
.reg-box {
    width: 80%;
    margin: 0 auto;
    padding-top: 100px;
}
.left {
    float: left;
    width: 40%;
    height: 740px;
    margin-right: 10%;
    position: relative;
}
.left h2 {
    color: #eee;
    font-weight: 600;
    font-size: 24px;
    position: absolute;
    bottom: 100px;
    left: 0;
}
.left > p {
    color: #eee;
    font-size: 24px;
    position: absolute;
    bottom: 50px;
    left: 0;
}
.right {
    float: left;
    width: 40%;
    height: 740px;
    margin-left: 10%;
}
.right > h2 {
    color: #EEE;
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 30px;
}
.el-form-item {
    margin-bottom: 55px;
}
.right input {
    width: 100%;
    height: 55px;
    color: #FFF;
    font-size: 20px;
    padding: 4px 8px;
    background: transparent !important;
    border: 0px solid #fff;
    border-bottom: 1px solid #eee;
}

.right input::-webkit-input-placeholder {
    color: #eee;
    font-size: 20px;
}
.right .el-input >>> input {
    width: 100%;
    height: 55px;
    color: #FFF;
    font-size: 20px;
    padding: 4px 8px;
    border-radius: 0;
    background: transparent !important;
    border: 0px solid #fff;
    border-bottom: 1px solid #eee;
}
.right .el-input >>> input::-webkit-input-placeholder {
    color: #eee;
    font-size: 20px;
}
.reg-bg {
    height: 1096px;
    background: url(../../assets/images/banner_bg.jpg) left center no-repeat;
    background-size: 100% 100%;
}
.btn-yuying {
    height: 55px;
    font-size: 22px;
    width: 100%;
    color: #ffffff;
    background: #4f93a6;
}
.btn-yuying:hover {
    color: #FFF;
    background: #61acc1;
}
</style>