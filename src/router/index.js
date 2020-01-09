import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

import Home from '@/pages/home/home'

var router = new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'index',
		component: Home
	}]
});
export default router;