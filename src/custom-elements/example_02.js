import { getClassNames } from "../utils/common";

import "./styles_02.scss";

export class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (this.isConnected) {
      const name = this.getAttribute("name");
      const className = this.getAttribute("classname");

      const classes = getClassNames({
        ["hello-world"]: true,
        [className]: !!className,
      });

      this.innerHTML = `
        <div class="${classes}">
            Hello ${name ? name : "World"}!!
        </div>`;
    }
  }
}

customElements.define("hello-world", HelloWorldComponent);
