class LastUpdated extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <p id='navbar-footer-text'>Last Updated Jan 2025 by Nicholas Saroiu</p>
        `;
    }
}

customElements.define('last-updated', LastUpdated);
