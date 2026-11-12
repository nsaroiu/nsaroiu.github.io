// Sidebar navbar shared by every page.
// Usage: <site-navbar current="home|projects|contact"></site-navbar>
// Paths are root-relative, so this works from any page depth.

const NAV_LINKS = [
    { id: 'home',     label: 'Home',     href: '/' },
    { id: 'projects', label: 'Projects', href: '/pages/projects' },
    { id: 'resume',   label: 'Resume',   href: '/files/nicholas_saroiu_resume.pdf', newTab: true },
    { id: 'contact',  label: 'Contact',  href: '/pages/contact' },
];

class SiteNavbar extends HTMLElement {
    connectedCallback() {
        const current = this.getAttribute('current');

        const links = NAV_LINKS.map(link => {
            if (link.id === current) {
                return `<h6 class='navbar-current'>${link.label}</h6>`;
            }
            const target = link.newTab ? ` target='_blank' rel='noreferrer noopener'` : '';
            return `<h6 class='navbar-link'><a href='${link.href}' class='a-navbar-link'${target}>${link.label}</a></h6>`;
        }).join('\n');

        this.innerHTML = `
        <div class='navbar-wrapper disable-scrolling'>
            <img src='/images/pfp.jpg' id='pfp'>

            <p id='navbar-name'>Nicholas Saroiu</p>

            <p id='navbar-description'>CS Graduate<br>
            from the<br>
            University of Toronto</p>

            <div class='navbar-icons-wrapper'>
                <a href='https://github.com/nsaroiu' target='_blank' class='navbar-icon-link'><i class='fa fa-github fa-2xl navbar-icon'></i></a>
                <a href='https://www.linkedin.com/in/nicholas-saroiu-08732b218/' target='_blank' class='navbar-icon-link'><i class='fa fa-linkedin-square fa-2xl navbar-icon'></i></a>
                <a href='https://www.instagram.com/nicksaroiu/' target='_blank' class='navbar-icon-link'><i class='fa fa-instagram fa-2xl navbar-icon'></i></a>
            </div>

            <div id='navbar-hr-wrapper'><hr id='navbar-hr'></div>

            <div class='navbar-links-wrapper'>
                ${links}
            </div>

            <div class='navbar-footer'>
                <last-updated></last-updated>
            </div>
        </div>
        `;
    }
}

customElements.define('site-navbar', SiteNavbar);
