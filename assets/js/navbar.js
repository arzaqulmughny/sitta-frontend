const toggleNavbar = (event) => {
    event.stopPropagation();
    
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('navbar-menu--active')
}

document.addEventListener('DOMContentLoaded', () => {
    // Set active menu navbar
    const pathname = window.location.pathname;
    document.querySelectorAll('.navbar-links').forEach((link) => {
        if (link.pathname === pathname) {
            link.classList.add('navbar-links--active')
        }
    })
})