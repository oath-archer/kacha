<template>
    <div class="navbar" :class="navClass">
		<a href="/" class="logo"></a>
		<ul class="menu clearfix">
			<li class="menuitem">
				<el-dropdown>
					<span class="el-dropdown-link">
						<router-link to="2">探索</router-link>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>
							<router-link to="21">发现照片</router-link>
						</el-dropdown-item>
						<el-dropdown-item>
							<router-link to="22">热门照片</router-link>
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
			<li class="menuitem">许可证</li>
			<li class="menuitem">加入</li>
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
				<el-button type="danger">上传内容</el-button>
			</li>
		</ul>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data (){
        return {
			navClass: ''
        }
	},
	methods: {
		handleSelect(key, keyPath){
			console.log(key, keyPath)
		}
	},
}
</script>

<style scoped>
.navbar {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 60px;
	z-index: 6;
	background: transparent;
	transition: all 0.3s ease;
}
.navbar.on {
	background: #545c64;
}
.logo {
	float: left;
	width: 170px;
	height: 60px;
	background: url(../../assets/images/kacha_logo.png) center center no-repeat;
}
.menu {
	float: right;
	height: 60px;
	line-height: 60px;
	/* background: #545c64; */
}
.menuitem {
	color: #fff;
	float: left;
	font-size: 14px;
	padding: 0 20px;
}
.menuitem a,
.menuitem i {
	color: #fff;
}
.menuitem .el-dropdown-link {
	padding: 20px 0;
}
.el-dropdown-menu__item a {
	color: #333;
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