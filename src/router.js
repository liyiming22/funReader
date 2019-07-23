import Vue from 'vue'
import Router from 'vue-router'
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
			component: loadView('BookShelf')
		},

		{
			path: '/explore',
			name: 'explore',
			component: loadView('Exploration')
		},

		{
			path: '/rank',
			name: 'rank',
			component: loadView('Rank')
		},

		{
			path: '/reader/:id',
			name: 'reader',
			component: loadView('Reader')
		},

		{
			path: '/search',
			name: 'search',
			component: loadView('Search')
		},

		{
			path: '/bookinfo/:id',
			name: 'bookinfo',
			component: loadView('BookInfo')
		},
		
		{
			path: '/categories',
			name: 'categories',
			component: loadView('Category')
		},

		{
			path: '/catlist',
			name: 'catlist',
			component: loadView('CateList')
		}
	]
})
