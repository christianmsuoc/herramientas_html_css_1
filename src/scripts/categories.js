import {data} from "./data";

document.addEventListener('DOMContentLoaded', () => {
    const sectionToLoadIn = document.getElementById('category-list');
    buildCategoryListSection(sectionToLoadIn.dataset.categories, sectionToLoadIn);
});

function buildCategoryListSection(categoryType, sectionToLoadIn) {
    data[categoryType].forEach(i => {
        const comarcaDiv = buildCategory(i.title, i.image, i.url, i.alt, i.sizes, i.srcset);
        sectionToLoadIn.appendChild(comarcaDiv);
    });
}

function buildCategory(titleText, url, href, alt, sizes, srcset) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = titleText;

    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;

    if (sizes) {
        img.sizes = sizes;
    }

    if (srcset) {
        img.srcset = srcset;
    }

    img.onclick = () => {
        window.location.href = href
    };

    div.appendChild(h2);
    const picture = document.createElement('picture');
    picture.appendChild(img)
    div.appendChild(picture);
    return div;
}
