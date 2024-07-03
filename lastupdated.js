class LastUpdated extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <p id='navbar-footer-text'>Last Updated Jul 2024 by Nicholas Saroiu</p>
        `;
    }
}

customElements.define('last-updated', LastUpdated);
