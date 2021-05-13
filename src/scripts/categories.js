import {data} from "./data";

document.addEventListener('DOMContentLoaded', () => {
    const sectionToLoadIn = document.getElementById('category-list');
    buildCategoryListSection(sectionToLoadIn.dataset.categories, sectionToLoadIn);

    const galiciaSection = document.getElementById('galicia-section');

    if (galiciaSection) {
        galiciaSection.addEventListener('click', () => {
            window.location.href = '../../galicia.html'
        });
    }
});

function buildCategoryListSection(categoryType, sectionToLoadIn) {
    data[categoryType].forEach(i => {
        if (i.sectionId !== 'galicia') {
            const comarcaDiv = buildCategory(i);
            sectionToLoadIn.appendChild(comarcaDiv);
        }
    });
}

function buildCategory(image) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = image.title;

    const img = document.createElement('img');

    img.src = image.image;
    img.alt = image.alt;

    if (image.sizes) {
        img.sizes = image.sizes;
    }

    if (image.srcset) {
        img.srcset = image.srcset;
    }

    img.onclick = () => {
        window.location.href = image.url
    };

    div.appendChild(h2);

    const picture = document.createElement('picture');
    picture.appendChild(img)
    div.appendChild(picture);

    return div;
}
