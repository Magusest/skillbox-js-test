import courses from '/public/projects.json'

const coursesList = document.querySelector('[data-project="parent"]');
const projectCardTemplate = document.querySelector('[data-template="project-card"]')

const renderCard = (card) => {
    const {classes, label, hit, title, src, alt, width, height, date, href} = card;

    const curssesItem = projectCardTemplate.content.cloneNode(true);
    const productCard = curssesItem.querySelector('.product-card');
    const productCardLabel = productCard.querySelector('.product-card__label');
    const productCardHit = productCard.querySelector('.product-card__hit');
    const productCardTitle = productCard.querySelector('h2');
    const productCardImg = productCard.querySelector('img');
    const productCardDate = productCard.querySelector('.product-card__date');
    const productCardHref = productCard.querySelector('a');

    classes.map(className => productCard.classList.add(className));
    productCardLabel.textContent = label;
    hit ? null : productCardHit.remove();
    productCardTitle.textContent = title;

    productCardImg.src = src;
    productCardImg.alt = alt;
    productCardImg.width = width;
    productCardImg.height = height;

    productCardDate.textContent = date;

    productCardHref.href = href;

    coursesList.append(curssesItem)
}

export default function initRennderCards() {
    if (!courses || !coursesList) {
        return
    }

    coursesList.classList.add('is-active')
    courses.map(course => renderCard(course))
}