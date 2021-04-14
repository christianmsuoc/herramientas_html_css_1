import {data} from "./data";

window.onload = () => {
    const sectionToLoadIn = document.getElementById('category-list')
    buildCategoryListSection(sectionToLoadIn.dataset.categories, sectionToLoadIn)
}

function buildCategoryListSection(categoryType, sectionToLoadIn) {
    console.log(data[categoryType])
    data[categoryType].forEach(i => {
        const comarcaDiv = buildCategory(i.title, i.image, i.url)
        sectionToLoadIn.appendChild(comarcaDiv);
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
