import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

import Home from '@/pages/home/home'
// 关于我们
import About from '@/pages/about/about'
import AboutUs from '@/pages/about/about-us'
import Licence from '@/pages/about/licence'
import QandA from '@/pages/about/q&a'
import Leaderboard from '@/pages/about/leaderboard'
import Challenge from '@/pages/about/challenge'
// 登录
import Login from '@/pages/login/login'
// 加入
import Join from '@/pages/join/join'
// 注册
import Register from '@/pages/register/register'
// 找回密码
import Retrieve from '@/pages/retrieve/retrieve'
// 修改密码
import Revise from '@/pages/revise/revise'
// 账号信息
/**
 * 个人资料
 * 我的关注
 * 我的收藏
 * 账号设置
 * 退出
 */

import Account from '@/pages/account/account'
import Info from '@/pages/account/info'
import Follows from '@/pages/account/follows'
import Collection from '@/pages/account/collection'
import Settings from '@/pages/account/settings'
// 我的图片
import MyPhotos from '@/pages/account/myPhotos'
// 上传
import Upload from '@/pages/account/upload'

// 探索
import Discover from '@/pages/discover/discover'
import Collect from '@/pages/collection/collection'
import PopularPhoto from '@/pages/popular-photo/popularPhoto'

var router = new Router({
	// mode: 'history',
	routes: [{
		path: '/',
		name: 'index',
		component: Home
	}, {
		path: '/about',
		name: 'about',
		component: About,
		children: [{
			path: '/about/us',
			component: AboutUs
		}, {
			path: '/about/licence',
			component: Licence
		}, {
			path: '/about/q&a',
			component: QandA
		}, {
			path: '/about/leaderboard',
			component: Leaderboard
		}, {
			path: '/about/challenge',
			component: Challenge
		}]
	}, {
		path: '/join',
		name: 'join',
		component: Join
	}, {
		path: '/register',
		name: 'register',
		component: Register
	}, {
		path: '/login',
		name: 'login',
		component: Login
	}, {
		path: '/retrieve',
		name: 'retrieve',
		component: Retrieve
	}, {
		path: '/revise',
		name: 'revise',
		component: Revise
	}, {
		path: '/account',
		name: 'account',
		component: Account,
		children: [{
			path: '/myPhotos',
			component: MyPhotos
		}, {
			path: '/upload',
			component: Upload
		}, {
			path: '/info',
			component: Info
		}, {
			path: '/follows',
			component: Follows
		}, {
			path: '/collection',
			component: Collection
		}, {
			path: '/settings',
			component: Settings
		}]
	}, {
		path: '/discover',
		name: 'discover',
		component: Discover,
		children: [{
			path: '/discover/',
			component: Collect
		}, {
			path: '/discover/popular-photo',
			component: PopularPhoto
		}, {
			path: '/discover/popular-search', 
			component: PopularPhoto
		}]
	}, {
		path: '/collection',
		name: 'collection',
		component: Collect
	}]
});

export default router;