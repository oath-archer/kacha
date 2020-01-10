import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

import Home from '@/pages/home/home'
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