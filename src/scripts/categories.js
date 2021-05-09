import {data} from "./data";

document.addEventListener('DOMContentLoaded', () => {
    const sectionToLoadIn = document.getElementById('category-list');
    buildCategoryListSection(sectionToLoadIn.dataset.categories, sectionToLoadIn);
});

function buildCategoryListSection(categoryType, sectionToLoadIn) {
    data[categoryType].forEach(i => {
        const comarcaDiv = buildCategory(i.title, i.image, i.url, i.alt);
        sectionToLoadIn.appendChild(comarcaDiv);
    });
}

function buildCategory(titleText, url, href, alt) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = titleText;

    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;
    img.onclick = () => {
        window.location.href = href
    };

    div.appendChild(h2);
    div.appendChild(img);
    return div;
}
