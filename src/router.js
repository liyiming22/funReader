import Vue from 'vue'
import Router from 'vue-router'
import BookShelf from '@/pages/BookShelf'
import Explore from '@/pages/Exploration'
import Rank from '@/pages/Rank'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'bookshelf',
			component: BookShelf
		},

		{
			path: '/explore',
			name: 'explore',
			component: Explore
		},

		{
			path: '/rank',
			name: 'rank',
			component: Rank
		}
	]
})

export default router