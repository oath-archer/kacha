<template>
    <div id="login">
        <div class="login-bg">
            <div class="login-box clearfix">
                <div class="left">
                    <h2>联系我们</h2>
                    <p>
                        <i class="el-icon-message"></i>
                        yuyingpic@163.com
                    </p>
                </div>
                <div class="right">
                    <h2>会员登录</h2>
                    <el-form :model="loginForm" ref="loginForm" class="loginForm">
                        <el-form-item>
                            <el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 0">
                            <el-input v-model="loginForm.verification" placeholder="请输入验证码"></el-input>
                        </el-form-item>
                        <el-form-item class="clearfix">
                            <div class="autologin">
                                <el-checkbox v-model="loginForm.autoLogin">下次自动登录</el-checkbox>
                            </div>
                            <div class="fogot" @click="forgetPw">
                                <span>忘记密码？</span>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="large" class="btn btn-yuying">登录</el-button>
                            <p class="login-text">
                                <span>没有帐号？</span>
                                <span class="reg" @click="toReg">立即注册</span>
                            </p>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loginForm: {
                phone: '',
                password: '',
                verification: '',
                autoLogin: false
            }
        }
    },
    methods: {
        toReg(){
            this.$router.push({ path: '/register' });
        },
        forgetPw(){
            this.$router.push({ path: '/retrieve' });
        }
    },
    mounted() {
        
    },
}
</script>

<style scoped>
#login {
    padding-top: 60px;
}
.autologin {
    float: left;
}
.autologin .el-checkbox {
    color: #FFF;
}
.fogot {
    float: right;
    color: #FFF;
    cursor: pointer;
}
.login-box {
    width: 80%;
    margin: 0 auto;
    padding-top: 100px;
}
.login-text {
    color: #FFF;
    text-align: center;
}
.login-text .reg {
    font-weight: 600;
    cursor: pointer;
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
.login-bg {
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