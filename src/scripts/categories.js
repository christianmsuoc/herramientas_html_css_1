import {data} from "./data";

document.addEventListener('DOMContentLoaded', () => {
    buildCategoryListSection(data[categoryType], 'category-list');
});

function buildCategoryListSection(items, elementIdToLoad) {
    items.forEach(i => {
        const comarcaDiv = buildCategory(i.title, i.image, i.url)
        document.getElementById(elementIdToLoad).appendChild(comarcaDiv);
    });
}

function buildCategory(titleText, url, href) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = titleText;

    const img = document.createElement('img')
    img.src = url;
    img.onclick = () => {
        window.location.href = href
    };

    div.appendChild(h2);
    div.appendChild(img);
    return div;
}
