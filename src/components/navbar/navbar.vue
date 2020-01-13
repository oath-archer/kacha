<template>
    <div class="navbar" :class="navClass">
		<a href="/" class="logo"></a>
		<el-input
			placeholder="免费搜索照片和视频"
			suffix-icon="el-icon-search"
			v-model="keyword">
		</el-input>
		<ul class="menu clearfix">
			<li class="menuitem">
				<el-dropdown>
					<span class="el-dropdown-link">
						<router-link to="/discover">探索</router-link>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<router-link to="/discover/popular-photo">发现照片</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="/discover/popular-photo">热门照片</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="23">热门搜索</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="24">热门作者排行榜</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="25">挑战赛</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="26">免费视频</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="27">图库故事</router-link>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</li>
			<li class="menuitem">
				<router-link to="collection">许可证</router-link>
			</li>
			<li class="menuitem">
				<router-link to="42">加入</router-link>
			</li>
			<li class="menuitem">
				<el-dropdown>
					<span class="el-dropdown-link">
						<i class="el-icon-more"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<router-link to="41">登录</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="42">加入</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="43">更多语言</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="44">关于我们</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="45">常见问题解答</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="46">用户协议和隐私政策</router-link>
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</li>
			<li class="menuitem">
				<el-button type="danger" class="upload">上传内容</el-button>
			</li>
		</ul>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data (){
        return {
			keyword: '',
			navClass: '',
        }
	},
	methods: {
		handleSelect(key, keyPath){
			console.log(key, keyPath)
		}
	},
	watch: {
		'$route.path'(val){
			if (val != '/'){
				this.navClass = 'on';
			}
		}
	},
}
</script>

<style scoped>
.upload {
	background: #5093a6;
	border-color: #5093a6;
}
.navbar {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 60px;
	z-index: 6;
	background: #f5f5f5;
	transition: all 0.3s ease;
}
.navbar .menuitem a,
.navbar .menuitem i {
	color: #333;
}
.navbar .el-input  {
	opacity: 1;
	width: 330px;
	margin-top: 10px;
	position: absolute;
    right: 430px;
}
.navbar.h {
	color: #fff;
	/* background: #f5f5f5; */
	background: transparent;
}
.navbar.h {
	opacity: 1;
}
.navbar.h .el-input {
	opacity: 0;
}
.navbar.h .menuitem a,
.navbar.h .menuitem i {
	color: #fff;
}
.navbar.on {
	/* background: #545c64; */
	color: #333;
	background: #f5f5f5;
}
.navbar.on .el-input {
	opacity: 1;
}
.navbar.on .menuitem a,
.navbar.on .menuitem i {
	color: #333;
}
.logo {
	float: left;
	width: 170px;
	height: 60px;
	background: url(../../assets/images/kacha_logo_1.png) center center no-repeat;
	background-size: 60%;
}
.menu {
	float: right;
	height: 60px;
	line-height: 60px;
	/* background: #545c64; */
}
.menuitem {
	color: #333;
	float: left;
	font-size: 14px;
	padding: 0 20px;
	font-weight: 600;
}
.menuitem .el-dropdown-link {
	padding: 20px 0;
}
.el-dropdown-menu__item a {
	color: #333;
	display: block;
}
.el-dropdown-menu__item:focus, 
.el-dropdown-menu__item:not(.is-disabled):hover {
	background-color: #e6e6e6;
}
.menuitem:hover {
	cursor: pointer;
	/* background: #434a50; */
	color: #f5f7fa;
}
.menuitem:last-child:hover {
	background: none;
}

</style>