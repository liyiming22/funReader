import Vue from 'vue'
import Router from 'vue-router'
// import BookShelf from '@/pages/BookShelf'
// import Explore from '@/pages/Exploration'
// import Rank from '@/pages/Rank'


Vue.use(Router)

function loadView(view) {
	return () => import(/* webpackChunkName: "view-[request]" */ `./pages/${ view }.vue`)
}

export default new Router({
	mode: 'history',
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
			path: '/details/:id',
			name: 'bookdetails',
			component: loadView('BookDetails')
		}
	]
})
