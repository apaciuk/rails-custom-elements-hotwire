class WordCount extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'})
        const text = document.createElement('span')
        text.textContent = "Hello Element!"
        shadow.appendChild(text)
    }
}

customElements.define("word-count", WordCount)