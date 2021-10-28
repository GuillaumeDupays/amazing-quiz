import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor() {
		super()
		this.name = 'Présentation'
		this.setTitle(this.name)
	}

	async getHtml() {
		return `
    <h1>${this.name}</h1>
    `
	}
}
