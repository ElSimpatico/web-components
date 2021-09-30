import { getClassNames } from '../utils/common';

import './styles_02.scss';

export class HelloWorldComponent extends HTMLElement {
    constructor() {
        super();
        this.isRendered = false;
    }

    static get observedAttributes() {
        return ['name'];
    }

    connectedCallback() {
        if (this.isConnected && !this.isRendered) {
            this.isRendered = true;
            this.render();
        }
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(attrName, oldValue, newValue);
        this.render();
    }

    render() {
        const name = this.getAttribute('name');
        const className = this.getAttribute('classname');

        const classes = getClassNames({
            ['hello-world']: true,
            [className]: !!className,
        });

        this.innerHTML = `
      <div class="${classes}">
          Hello ${name ? name : 'World'}!!
      </div>`;
    }
}

customElements.define('hello-world', HelloWorldComponent);
