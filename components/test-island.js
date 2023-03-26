{
  document.head.append(Object.assign(document.createElement('link'), {
    rel: 'stylesheet',
    media: 'screen',
    href: 'components/test-island.css'
  }))

  customElements.define('test-island', class extends HTMLElement {
    connectedCallback() {
      this.textContent = 'Hello, world!'
    }
  })
}
