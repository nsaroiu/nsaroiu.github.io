class LastUpdated extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <p id='navbar-footer-text'>Last Updated Dec 2023 by Nicholas Saroiu</p>
        `;
    }
}

customElements.define('last-updated', LastUpdated);
