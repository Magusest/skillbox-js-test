const body = document.querySelector('body');
const menuButton = body.querySelector('[data-sandwich="data-sandwich"]');
const nav = body.querySelector('[data-main-nav="nav"]');
const navItems = nav.querySelectorAll('[data-nav-item="item"]')
const logo = body.querySelector('[data-header-logo="data-header-logo"]');

const itemApearTime = 100;
const breackpoint = 1024;


export default function initMenuButton() {
    if (!menuButton) {
        return
    }

    const observer = new ResizeObserver(entries => {
        const bodyWidth = entries[0].contentRect.width;
        if (bodyWidth >= breackpoint) {
            closeMenuHandler();
        }
    })

    const openMenuHandler = () => {
        body.classList.toggle('scroll-lock');
        menuButton.classList.toggle('is-active');
        nav.classList.toggle('is-active');
        logo.classList.toggle('is-menu');
        
        navItems.forEach((item, key) => {
            setTimeout(() => {
                item.classList.toggle('is-active')
            }, key  * itemApearTime + itemApearTime);             
        })
    }

    const closeMenuHandler = () => {
        body.classList.remove('scroll-lock');
        nav.classList.remove('is-active');
        menuButton.classList.remove('is-active');
        logo.classList.remove('is-menu');    

        navItems.forEach((item) => {
            item.classList.remove('is-active')
        })    
    }

    const escapeHandler = (evt) => {
        if (evt.key === 'Escape') {
            closeMenuHandler()
        }
    }


    menuButton.addEventListener('click', openMenuHandler)
    document.addEventListener('keydown', escapeHandler)
    observer.observe(body);
}