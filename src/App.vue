<template>
	<div id="app">
		<Navbar ref="navbar"></Navbar>
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from './components/navbar/navbar'
export default {
	name: 'app',
	components: {
		Navbar
	}
}
</script>

<style>

</style>
