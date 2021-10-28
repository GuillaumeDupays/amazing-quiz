import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor() {
		super()
		this.name = 'Saved quiz'
		this.setTitle(this.name)
	}

	async getHtml() {
		return `
    <h1>${this.name}</h1>
    `
	}
}
