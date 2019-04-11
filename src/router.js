import Vue from 'vue'
import Router from 'vue-router'
import BookShelf from '@/pages/BookShelf'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			redirect: '/bookshelf'
		},

		{
			path: '/bookshelf',
			name: 'bookshelf',
			component: BookShelf
		}
	]
})

export default router