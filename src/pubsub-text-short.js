import PubsubText from '@vandeurenglenn/pubsub-text'

export default customElements.define('pubsub-text-short', class extends PubsubText {
  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  set value(value) {
    if (value) {
      this._value = value
      this.setAttribute('title', value)
      if (this.fade) this.classList.add('fade')
      const start = value.slice(0, 6)
      const end = value.slice(-4)
      this.shadowRoot.querySelector('.value').innerHTML = `${start}...${end}`
      if (this.fade) this.classList.remove('fade')
    }
  }

  get value() {
    return this._value
  }

  get template() {
    return `
    <style>
      * {
        pointer-events: none;
      }
      :host {
        display: flex;
        font-size: 18px;
        font-weight: 400;
        pointer-events: auto;
      }
      .value {
        opacity: 1;
        padding-left: 6px;
        transition: opacity 160ms --ease-in 160ms;
      }
      ::host(.fade) .value {
        opacity: 0;
        transition: opacity 160ms --ease-out;
      }
    </style>
    <span class="value"></span>
    `
  }
})
