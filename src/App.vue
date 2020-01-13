<template>
	<div id="app">
		<Navbar ref="navbar"></Navbar>
		<router-view></router-view>
		<Foot />
	</div>
</template>

<script>
import Foot from '@/components/footer/footer';
import Navbar from './components/navbar/navbar'
export default {
	name: 'app',
	components: {
		Foot,
		Navbar
	}
}
</script>

<style>

</style>
