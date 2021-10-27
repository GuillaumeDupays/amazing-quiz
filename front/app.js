import homeView from './views/homeView.js'
import createQuizView from './views/createQuizView.js'
import presentationView from './views/presentationView.js'

let contentDiv = document.getElementById('content')

const navigateTo = (url) => {
	history.pushState(null, null, url)
	router()
}

const router = async () => {
	const routes = [
		{ path: '/', view: homeView },
		{ path: '/home', view: homeView },
		{ path: '/create-quiz', view: createQuizView },
		{ path: '/contact', view: presentationView },
	]

	// test each route for potential match
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		}
	})

	let match = potentialMatches.find((potential) => potential.isMatch)

	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		}
	}

	const view = new match.route.view()

	document.querySelector('#app').innerHTML = await view.getHtml()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', (e) => {
		if (e.target.matches('[data-link]')) {
			e.preventDefault()
			navigateTo(e.target.href)
		}
	})
	router()
})
// window.onpopstate = () => {
// 	contentDiv.innerHTML = routes[window.location.pathname]
// }

// function onNavItemClick(pathName) {
// 	window.history.pushState({}, pathName, window.location.origin + pathName)
// 	contentDiv.innerHTML = routes[pathName]
// }

// contentDiv.innerHTML = routes[window.location.pathname]
