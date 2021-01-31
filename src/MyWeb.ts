export class MyWeb extends HTMLElement {
  constructor() {
    // always call super() first
    super();
    console.log('constructed!')
    this.addEventListener('click', () => {
      this.style.color = 'red'
    })
  }

  connectedCallback() {
    const template: HTMLTemplateElement = document.getElementById('my-template')! as HTMLTemplateElement
    const clone = document.importNode(template.content, true)
    this.attachShadow({ mode: 'open' })
    const shadow = this.shadowRoot!
    shadow.appendChild(clone)
  }
}
