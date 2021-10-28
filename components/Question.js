class QuestionG extends HTMLElement {
	constructor() {
		super()

		this._question = [
			{
				id: 1,
				theme: 'Humour',
				questionAsked: 'De quelle couleur sont les petits pois ?',
				answer: 'rouge',
			},
			{
				id: 2,
				theme: 'Humour',
				questionAsked: 'Pourquoi les imbéciles sont heureux ?',
				answer: 'on ne sait pas...',
			},
			{
				id: 3,
				theme: 'Sport',
				questionAsked: 'Qui est le vrai Ronaldo',
				answer: 'le contraire du faux',
			},
		]
	}

	connectedCallback() {
		this.innerHTML = `
		<style></style>
    <template id="question-template">
      <div class="box-question">
        <h2 id="theme"></h2>
      </div>
    </template>
    <div id="result"></div>
    `

		this._templateContent = document.querySelector('#question-template').content
		this._result = document.querySelector('#result')

		this._question.map((q) => {
			const clone = document.importNode(this._templateContent, true)
			// Update the DOM with current question data
			clone.querySelector('#theme').innerHTML = q.theme
			// Add to the DOM
			this._result.appendChild(clone)
		})
	}
	render() {
		this.innerHTML = `
		<style></style>
    <template id="question-template">
      <div class="box-question">
        <h2 id="theme"></h2>
      </div>
    </template>
    <div id="result"></div>
    `
	}
}

window.customElements.define('questions-g', QuestionG)
