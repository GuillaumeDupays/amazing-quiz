class QuizThemesG extends HTMLElement {
	constructor() {
		super()
		console.log('quiz-theme-g')
	}

	connectedCallback() {
		document.createElement('p')
		this.showEachTheme()
		console.log('quiz-theme-g ajouté au DOM ')
		this.innerHTML = `
		<style></style>
		<template id="create-quiz-template">
		<div>
		<h2 id="each-theme"></h2>
		</div>
		</template>
		<div id="create-quiz-result"></div>
		`
	}

	showEachTheme() {
		const listThemes = [
			'Famille',
			'Humour',
			'Histoire',
			'Sport',
			'Gastronomie',
			'Anecdotes',
		]
		let lengthItemList = document.getElementsByClassName('item-list').length
		// only if item-list does not exist, user can display at click list items
		if (lengthItemList === 0) {
			for (let item of listThemes) {
				console.log('item :>> ', item)
				let div = document.createElement('div')
				div.className = 'item-list'
				div.innerHTML = `<p>${item}</p>`
				document.body.appendChild(div)
			}
		}
		console.log('lengthItemList :>> ', lengthItemList)
	}

	start() {
		console.log('start')
	}

	render() {
		this.innerHTML = `
		<style></style>
		<template id="create-quiz-template">
			<div>
				<h2 id="each-theme"></h2>
			</div>
		</template>
		<div id="create-quiz-result"></div>
    `
	}
}

window.customElements.define('quiz-themes-g', QuizThemesG)
