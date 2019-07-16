import Vue from 'vue'
import Router from 'vue-router'
import BookShelf from '@/components/BookShelf/BookShelf'
import Explore from '@/components/Exploration/Exploration'
import Rank from '@/components/Rank/Rank'
import Reader from '@/components/Reader/Reader'
import Search from '@/components/Search/Search'

Vue.use(Router)

function loadView(view) {
	return () => import(/* webpackChunkName: "view-[request]" */ `./components/${ view }/${ view }.vue`)
}

export default new Router({
	// mode: 'history',
	routes: [
		{
			path: '/',
			name: 'bookshelf',
			// component: BookShelf
			component: loadView('BookShelf')
		},

		{
			path: '/explore',
			name: 'explore',
			// component: Explore
			component: loadView('Exploration')
		},

		{
			path: '/rank',
			name: 'rank',
			// component: Rank
			component: loadView('Rank')
		},

		{
			path: '/reader/:id',
			name: 'reader',
			component: loadView('Reader')
			// component: Reader
		},

		{
			path: '/search',
			name: 'search',
			// component: Search
			component: loadView('Search')
		}
	]
})
