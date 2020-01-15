<template>
	<div id="app">
		<Navbar ref="navbar"></Navbar>
		<router-view ref="view"></router-view>
		<BaseFooter />
	</div>
</template>

<script>
import Navbar from './components/navbar/navbar';
import BaseFooter from '@/components/footer/footer';
export default {
	name: 'app',
	components: {
		Navbar,
		BaseFooter,
	}
}
</script>

<style>
.banner-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    max-height: 580px;
	min-height: 580px;
	background: url(./assets/images/banner_bg.jpg) no-repeat;
    background-size: cover;
    background-position: 0 -190px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.banner-content h1 {
    color: #FFF;
    text-align: center;
}
.banner-title {
    font-size: 52px;
    font-weight: 550;
    margin-bottom: 15px;
}
.banner-subtitle {
    font-size: 40px;
}
</style>
