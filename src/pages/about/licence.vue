<template>
    <div id="licence">
        <div class="banner-content">
            <section>
                <h1 class="banner-title">简明规则</h1>
                <h1 class="banner-subtitle">咔嚓上的所有照片均可免费使用</h1>
            </section>
        </div>
        <div class="content">
            <article>
                <h1 class="title">哪些行为是允许的？</h1>
                <ul>
                    <li>
						<i class="el-icon-check"></i>
						<span>咔嚓上的所有照片均可免费使用。</span>
					</li>
                    <li>
						<i class="el-icon-check"></i>
						<span>无需注明归属。注明摄影作者或咔嚓不是强制的，但这种行为值得赞赏。</span>
					</li>
                    <li>
						<i class="el-icon-check"></i>
						<span>你可以修改照片。发挥创造力，随心所欲地编辑照片。</span>
					</li>
                </ul>
            </article>
			<article>
                <h1 class="title">哪些行为是禁止的？</h1>
				<h1 class="title">请尊重我们的贡献者的辛勤工作，并牢记这些限制。</h1>
                <ul>
                    <li>
						<i class="el-icon-close"></i>
						<span>身份可识别的人物不得以不佳形象或冒犯方式出现。</span>
					</li>
                    <li>
						<i class="el-icon-close"></i>
						<span>请勿出售未经修改的照片副本，例如请勿在不增加任何价值的情况下将其作为素材照片、海报、印刷品或实物出售。</span>
					</li>
                    <li>
						<i class="el-icon-close"></i>
						<span>请勿在图片上暗示你的产品获得了他人或品牌的认可。</span>
					</li>
                    <li>
						<i class="el-icon-close"></i>
						<span>请勿在其他素材照片或壁纸平台上重新发布或出售照片。</span>
					</li>
                </ul>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.content {
	width: 1280px;
    margin: 0 auto;
    padding: 45px 45px;
    box-sizing: border-box;
}
.title {
	font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;

}
article {
	margin-bottom: 40px;
}
article > ul > li {
	font-size: 18px;
	line-height: 36px;
}
article > ul > li > i {
	font-weight: 600;
	margin-right: 10px;
}
ul > li > .el-icon-check {
	color: #40a349;
}
ul > li > .el-icon-close {
	color: #d02927;
}
</style>