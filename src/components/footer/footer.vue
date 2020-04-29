<template>
    <div id="footer">
        <div class="contact">
            <div class="email">
                <p>想要取得联系？ 我们很乐意听取您的意见！</p>
                <p>freephoto@qq.com</p>
            </div>
            <div class="router">
                <ul>
                    <li>
                        <router-link to="/about/us">关于我们</router-link>
                    </li>
                    <li>
                        <router-link to="/about/licence">简明规则</router-link>
                    </li>
					<li>
                        <router-link to="/about/q&a">常见问题</router-link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <router-link to="/about/leaderboard">热门作者排行榜</router-link>
                    </li>
                    <li>
                        <router-link to="">活动大赛</router-link>
                    </li>
                </ul>
            </div>
            <div class="register">
                <el-input
                    placeholder="请输入你的电子邮箱"
                    v-model="userEmail"
                    clearable>
                </el-input>
                <el-button type="danger" class="register-btn">注册</el-button>
            </div>
        </div>
        <div class="btm clearfix">
            <p>感谢所有摄影作者的提供与分享，谢谢！</p>
            <div class="link">
                <el-link :underline="false">使用条款</el-link>
                <el-link :underline="false">隐私政策</el-link>
                <el-link :underline="false">许可证</el-link>
                <el-link :underline="false">版本说明</el-link>
                <el-link :underline="false">简体中文</el-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userEmail: ''
        }
    }
}
</script>

<style scoped>
#footer {
    border-top: 1px solid #bbb;
    padding-top: 50px;
}
.contact {
    width: 1280px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.contact > div {
    flex: 1;
    padding: 0 40px;
}
.email {
    text-align: center;
    color: #909399;
    line-height: 40px;
}
.router {
    display: flex;
}
.router > ul {
    flex: 1;
}
.router > ul > li {
    line-height: 40px;
}
.router > ul > li a {
    color: #909399;
}
.register {
    padding: 20px;
}
.register .el-input {
    margin-bottom: 15px;
}
.register .el-button {
    width: 100%;
}
.register-btn {
    background: #5093a6;
    border-color: #5093a6;
}
.btm {
    background: #b8c2c8;
    padding: 40px calc((100% - 1280px) / 2)
}
.btm p {
    float: left;
    color: #FFF;
}
.btm .link {
    float: right;
}
.btm .link a {
    margin: 0 15px;
    color: #fff;
}
</style>