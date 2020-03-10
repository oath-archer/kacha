<template>
    <div id="join">
        <section>
            <h1 class="title">加入我们</h1>
            <p class="content">你有令人惊叹的图片想要与图片爱好者分享吗？那就单击下面的按钮，将它们上传到咔嚓。它们将在咔嚓许可下发布。你将帮助人们获得可以免费使用的精美照片。</p>
        </section>
        <section>
            <h1 class="title">向更多人展示</h1>
            <p class="content">将你的照片呈现在数百万位访客的面前，并推广你的网站、博客或社交媒体资料。</p>
        </section>
        <section>
            <h1 class="title">帮助社区</h1>
            <p class="content">帮助数百万的人为他们的网站、博客、产品或图书封面找到精彩的照片。</p>
        </section>
        <section>
            <h1 class="title">展示你的作品</h1>
            <p class="content">在图库上创建和管理你的作品集，并通过图库打赏赚钱。</p>
        </section>
        <section>
            <el-button type="primary">上传照片</el-button>
            <el-button>加入我们</el-button>
        </section>
    </div>
</template>

<script>
export default {
    name: 'join',
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
#join {
    width: 1280px;
    margin: auto;
    padding-top: 60px;
    padding-left: 45px;
    padding-right: 45px;
    box-sizing: border-box;
}
section {
    line-height: 38px;
    text-align: center;
    margin-bottom: 96px;
}
section:nth-child(1) {
    padding-top: 98px;
}
.title {
    font-size: 30px;
    font-weight: 600;
    color: #333;
}
.content {
    font-size: 20px;
    color: #9E9E9E;
}
</style>