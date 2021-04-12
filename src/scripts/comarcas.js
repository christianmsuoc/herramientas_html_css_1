import {comarcas} from "./data";

document.addEventListener('DOMContentLoaded', () => {
    comarcas.forEach(c => {
        const comarcaDiv = getComarcaDiv(c.title, c.image, c.url)
        document.getElementById('section-comarcas-list').appendChild(comarcaDiv);
    });
});

function getComarcaDiv(titleText, url, href) {
    const div = document.createElement('div');

    const h2= document.createElement('h2');
    h2.innerText = titleText;

    const img = document.createElement('img')
    img.src = url;
    img.onclick = () => {window.location.href = href;}

    div.appendChild(h2);
    div.appendChild(img);
    return div;
}
