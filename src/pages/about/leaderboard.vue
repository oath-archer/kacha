<template>
    <div id="author">
        <header>
            <h1 class="title">热门摄影作者排行榜</h1>
            <h2 class="subtitle">最近30天内上传的照片获得最多浏览量的用户。</h2>
        </header>
        <div class="author-list">
            <article class="list-item clearfix">
                <div class="author-profile">
                    <div class="leaderboard-metric">
                        <span>1</span>
                        <span class="metric">5.12 万</span>
                        <span class="metric-label">浏览量</span>
                    </div>
                    <a href="">
                        <el-avatar :size="60" src="https://images.pexels.com/users/avatars/838042/rick-han-486.jpeg?w=120&h=120&fit=crop&crop=faces" @error="errorHandler">
                            <img src="../../assets/images/empty.png"  alt="头像">
                        </el-avatar>
                    </a>
                    <div class="author-detail">
                        <h3 class="author-name">
                            <a href="">Elijah O'Donnell</a>
                        </h3>
                        <el-button size="mini" icon="el-icon-plus"></el-button>
                        <p class="anthor-bio">Hi, I'm Elijah a young lad confused about the world and addicted digital creative.</p>
                    </div>
                </div>
                <div class="author-photos">
                    <a href="" class="photo-item">
                        <img src="http://t9.baidu.com/it/u=1331086181,3931619244&fm=79&app=86&f=JPEG?w=1280&h=1781" alt="">
                    </a>
                    <a href="" class="photo-item">
                        <img src="http://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&f=JPEG?w=900&h=1350" alt="">
                    </a>
                    <a href="" class="photo-item">
                        <img src="http://t9.baidu.com/it/u=1307125826,3433407105&fm=79&app=86&f=JPEG?w=5760&h=3240" alt="">
                    </a>
                    <a href="" class="photo-item">
                        <img src="http://t7.baidu.com/it/u=1526290176,1854172923&fm=79&app=86&f=JPEG?w=1280&h=901" alt="">
                    </a>
                    <a href="" class="photo-item">
                        <img src="http://t7.baidu.com/it/u=3982789320,470642820&fm=79&app=86&f=JPEG?w=1280&h=887" alt="">
                    </a>
                    <a href="" class="photo-item">
                        <img src="http://t9.baidu.com/it/u=66417281,3465999929&fm=79&app=86&f=JPEG?w=1280&h=1920" alt="">
                    </a>
                    <a href="" class="photo-more">❯</a>
                </div>
            </article>
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
        errorHandler(){
			return true;
		},
    },
}
</script>

<style scoped>
#author {
    width: 1280px;
    margin: 0 auto;
    padding: 0 45px;
    box-sizing: border-box;
}
header {
    padding: 50px 0 40px;
}
.title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
}
.subtitle {
    font-size: 20px;
    text-align: center;
}
.list-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 130px;
    margin: 40px 0;
}
.author-profile {
    width: 35%;
    display: flex;
    align-items: center;
}
.leaderboard-metric {
    width: 80px;
    margin-right: 10px;
    flex-shrink: 0;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
}
.author-detail {
    width: calc(100% - 180px);
}
.metric {
    display: block;
    font-size: 12px;
    color: #5e5e5e;
}
.metric-label {
    display: block;
    font-size: 12px;
    color: #5e5e5e;
    font-weight: 300;
}
.el-avatar {
    margin-right: 10px;
}
.author-name {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 2.5px;
    font-size: 26px;
    font-weight: 600;
}
.author-name a {
    color: #333;
}
.el-button {
    vertical-align: baseline;
    margin-left: 5px;
    line-height: 0;
    height: 16px;
    width: 16px;
    padding: 0;
}
.anthor-bio {
    font-size: 14px;
    color: #1a1a1a;
}
.author-photos {
    width: 65%;
    height: 100%;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
}
.photo-item {
    margin-right: 10px;
}
.photo-item img {
    height: 100%;
}
.photo-more {
    position: absolute;
    right: 0;
    width: 40px;
    height: 100%;
    text-align: center;
    line-height: 130px;
    font-size: 36px;
    color: #333;
    opacity: 0.8;
    transition: all 0.3s ease;
    background: rgba(255,255,255,0.6);
}
.photo-more:hover {
    opacity: 1;
}

</style>