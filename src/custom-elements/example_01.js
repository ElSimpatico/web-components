export class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (this.isConnected) {
      const div = document.createElement("div");
      div.textContent = "Hola mundo!";
      this.appendChild(div);
    }
  }
}

customElements.define("hello-world", HelloWorldComponent);
