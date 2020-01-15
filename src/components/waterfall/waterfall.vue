<template>
    <div id="waterfall">
        <waterfall :col="col" :data="data" @loadmore="loadmore" @scroll="scroll">
            <template>
                <div class="cell-item" v-for="(item, index) in data" :key="index">
                    <img v-if="item.img" :lazy-src="item.img" alt="加载错误" @click="handleImages(item.img)">
                    <div class="item-footer">
                        <div class="avatar" :style="{ backgroundImage : `url(${item.avatar})` }"></div>
                        <div class="name">{{ item.user }}</div>
                    </div>
                </div>
            </template>
        </waterfall>
        <div class="loading" v-if="loading">
            <img src="../../assets/images/loading.svg" alt="">
        </div>

        <Imagesinfo ref="Imagesinfo"/>
    </div>
</template>

<script>
import Imagesinfo from '@/components/imagesInfo/imagesInfo'

export default {
    name: 'water',
    components: {
        Imagesinfo
    },
    data(){
        return {
            col: 3,
            data: [],
            loading: false,
            originData: [{
                img: "http://t8.baidu.com/it/u=581096476,2560083681&fm=79&app=86&f=JPEG?w=1242&h=1800",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "最近浴室新宠，日系神仙好物了解一下～",
                user: "www",
                like: "953"
            }, {
                img: "https://image.watsons.com.cn//upload/083767f0.JPG?w=828&h=620&x-oss-process=image/resize,w_1080",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
                user: "迷人的小妖精迷人的小妖精",
                like: "952"
            }, {
                img: "https://image.watsons.com.cn//upload/02a4f38d.jpg?w=1067&h=1067&x-oss-process=image/resize,w_1080",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "最近浴室新宠，日系神仙好物了解一下～",
                user: "迷人的小妖精迷人的小妖精",
                like: "953"
            }, {
                img: "https://image.watsons.com.cn//upload/589585c1.jpeg?x-oss-process=image/resize,w_1080",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
                user: "迷人的小妖精迷人的小妖精",
                like: "953"
            }, {
                img: "https://image.watsons.com.cn//upload/d862d932.jpg?w=1080&h=1440&x-oss-process=image/resize,w_1080",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "最近浴室新宠，日系神仙好物了解一下～",
                user: "迷人的小妖精迷人的小妖精",
                like: "953"
            }, {
                img: "http://t9.baidu.com/it/u=3949188917,63856583&fm=79&app=86&f=JPEG?w=1280&h=875",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
                user: "迷人的小妖精迷人的小妖精",
                like: "953"
            }, {
                img: "https://image.watsons.com.cn//upload/71d19462.jpg?x-oss-process=image/resize,w_1080",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？",
                user: "迷人的小妖精迷人的小妖精",
                like: "953"
            }, {
                img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578889987990&di=daae28a4237532376a6916500e48340c&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201710%2F04%2F152611udybnqgph7g0dgbu.jpg",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",
                user: "迷人的小妖精迷人的小妖精",
                like: "953"
            }, {
                img: "https://image.watsons.com.cn//upload/5c3e51e4.jpg?w=720&h=960&x-oss-process=image/resize,w_1080",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "夏天用这款姨妈巾，让你体验真正的清爽",
                user: "迷人的小妖精迷人的小妖精",
                like: "953"
            }, {
                img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",
                avatar: "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
                title: "最近浴室新宠，日系神仙好物了解一下～",
                user: "迷人的小妖精迷人的小妖精123",
                like: "953"
            }],
        }
    },
    computed:{
        itemWidth(){  
            return (138*0.5*(document.documentElement.clientWidth / 375))
        },
        gutterWidth(){
            return (3*0.5*(document.documentElement.clientWidth / 375))
        }
    },
    methods: {
        scroll(scrollData){
            if (scrollData.scrollTop > 200){
                this.$parent.$parent.$refs.navbar.navClass = 'on';
            } else if (scrollData.scrollTop == 0){
                this.$parent.$parent.$refs.navbar.navClass = 'on';
            }
        },
        switchCol(col){
            this.col = col;
        },
        loadmore(){
			console.log('loadmore')
			/*
            this.loading = true;
            setTimeout( () => {
                this.data = this.data.concat(this.originData, this.originData);
                this.loading = false;
			}, 1500);
			*/
        },
        handleImages(img){
            this.$refs.Imagesinfo.imagesDialog = true;
            this.$refs.Imagesinfo.imgSrc = img;
        }
    },
    mounted() {
        this.data = this.originData;

        var _this = this;
        window.onresize = window.onload = function (){
            /*
            if (document.documentElement.clientWidth >= 1600){
                _this.switchCol(5);
            } else if (document.documentElement.clientWidth <= 1024){
                _this.switchCol(2);
            } else {
                _this.switchCol(3);
            }
            */

            if (document.documentElement.clientWidth <= 1024){
                _this.switchCol(2);
            } else {
                _this.switchCol(3);
            }
        }
    },
}
</script>

<style>
#waterfall {
	width: 1280px;
	margin: 0 auto;
}
.cell-item {
    position: relative;
    cursor: pointer;
    width: 100%;
    border-radius: 12px 12px 12px 12px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 45px;
    margin-bottom: 30px;
}
/*
.cell-item:hover .item-footer {
    opacity: 1;
}
*/
.cell-item img {
    /* border-radius: 12px 12px 0 0; */
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
}
.item-desc {
    font-size: 14px;
    color: #333333;
    line-height: 15px;
    font-weight: bold;
}
.item-footer {
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 45px;
    width: calc(100% - 120px);
    padding: 25px 15px 15px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    border-radius: 0 0 4px 4px;
    background-image: linear-gradient(rgba(255,255,255,0) 5%, #606266);
}
.avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}
.name {
    max-width: 100px;
    margin-left: 10px;
    font-size: 14px;
    color: #dcdfe6;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.loading {
    text-align: center;
}
.loading img {
    width: 160px;
}
</style>