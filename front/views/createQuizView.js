import AbstractView from './AbstractView.js'

export default class extends AbstractView {
	constructor() {
		super()
		this.setTitle('Create Quiz')
	}

	async getHtml() {
		return `
    <h1>Create a new quiz</h1>
		<quiz-themes-g/>
    `
	}
}
