class LastUpdated extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <p id='navbar-footer-text'>Last Updated Nov 2026 by Nicholas Saroiu</p>
        `;
    }
}

customElements.define('last-updated', LastUpdated);
