<template>
    <div id="q&a">
        <div class="banner-content">
            <section>
                <h1 class="banner-title">常见问题解答</h1>
                <!-- <h1 class="banner-subtitle">咔嚓上的所有照片均可免费使用</h1> -->
            </section>
        </div>
        <div class="content">
            <article>
                <h1 class="title">我是咔嚓的新用户。</h1>
                <h1 class="title">我需要了解哪些信息？</h1>
                <div>
                    <p class="q">咔嚓是什么？</p>
                    <p class="a">咔嚓帮助设计师、博客作者和正在寻找视觉效果的任何人找到可以在任何地方免费使用的精彩照片。</p>
                </div>
                <div>
                    <p class="q">咔嚓上的照片许可是什么样的？</p>
                    <p class="a">所有上传到咔嚓上的照片都是在咔嚓许可下授权的。这意味着你可以将它们免费用于个人和商业用途。有关更多信息，请参阅以下问题、我们的许可证页面或服务条款。</p>
                </div>
                <div>
                    <p class="q">我可以将照片用于商业项目吗？</p>
                    <p class="a">可以，所有照片都可以免费用于商业用途。你可以在你的商业网站、博客、产品或其他任何地方使用它们。请注意，照片中描绘的内容（比如商标、徽标或品牌）可能仍受隐私权、版权或商标权等的保护，你不应暗示所述作品中描绘的人物、品牌、商标或版权所有者认可或参与你的产品或服务。对于此类使用案例，你可能需要获得所述第三方的许可或同意。</p>
                </div>
                <div>
                    <p class="q">我可以出售咔嚓的照片或视频吗？</p>
                    <p class="a">你不能出售在咔嚓许可下授权的照片。这包括将它们作为印刷品（海报、明信片…）或实物（T 恤、杯子…）出售。只有你做过编辑、修改或以其他方式增加价值后才能出售它们。而且你不可以在其他素材照片或壁纸平台上出售或上传它们。</p>
                </div>
                <div>
                    <p class="q">我需要提及来源或摄影作者吗？</p>
                    <p class="a">都不需要，无需注明归属。但如果你提及并链接到咔嚓和创作者，我们会非常高兴。</p>
                </div>
                <div>
                    <p class="q">什么是赞助照片？</p>
                    <p class="a">这些是合作伙伴提供的照片，你可以购买这些照片。如果单击他们的一张照片，将转至他们的网站。在那里，你可以购买照片。</p>
                </div>
            </article>

            <article>
                <h1 class="title">我想将照片提交到咔嚓，流程是什么？</h1>
                <div>
                    <p class="q">我可以在哪里上传自己的照片和视频？</p>
                    <p class="a">在此处创建一个帐户：https://www.pexels.com/zh-cn/submit-photos/。你上传的所有照片将在咔嚓许可下发布。请阅读上述更多关于许可的信息或转至我们的许可证页面。</p>
                </div>
                <div>
                    <p class="q">上传内容后会发生什么？</p>
                    <p class="a">咔嚓的策展团队将选出精美的照片，并在我们的主页和搜索中进行发布。这通常需要几天时间。如果我们选中了你的内容，你会收到一封电子邮件通知。你的内容也将通过我们的 API 进行分发。你的照片将帮助数百万创作者制作精彩的内容。</p>
                </div>
                <div>
                    <p class="q">如何删除照片？</p>
                    <p class="a">
                        在你的个人资料中单击照片。然后，你可以在页面底部找到一个删除照片链接，除非你的内容已经展示在我们的主页和搜索中。如果已经展示，请通过电子邮件将你的照片/视频链接发送至freephoto@qq.com。
                        请记住，如果有人已经下载了照片，他们仍然可以免费使用。咔嚓许可无法撤销。
                    </p>
                </div>
                <div>
                    <p class="q">如何删除我的帐户？</p>
                    <p class="a">请向我们发送电子邮件至freephoto@qq.com。</p>
                </div>
            </article>

            <article>
                <h1 class="title">其他信息</h1>
                <div>
                    <p class="q">我有一个品牌或一家公司。你们提供合作机会吗？</p>
                    <p class="a">当然！请发送电子邮件至 805228204@qq.com 与我们联系。请在主题行中注明“咔嚓”，以便我们更快地做出回复。</p>
                </div>
                <div>
                    <p class="q">还有问题？</p>
                    <p class="a">你可以发送电子邮件至805228204@qq.com联系我们。</p>
                </div>
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
    margin-bottom: 45px;
}
article > div {
    margin-bottom: 25px;
}
.q {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
}
.a {
    font-size: 18px;
    line-height: 32px;
}
</style>