import barbanzaImage from '../images/comarcas/barbanza.jpg';
import marinaImage from '../images/comarcas/marina.jpg';
import ferrolterraImage from '../images/comarcas/ferrolterra.jpg';
import galiciaImage from '../images/comarcas/galicia.jpg';

import empanadaImage from '../images/recetas/empanada_maiz.png';
import huevosPanMaizImage from '../images/recetas/huevos_pan_maiz.png';

const lavaColor = '#cf081fff';


export const data = {
    recipesBarbanza: [
        {
            url: '../../receta-empanada.html',
            title: 'Empanada de maíz',
            image: empanadaImage
        },
        {
            url: '../../receta-huevos-pan-maiz.html',
            title: 'Huevos con pan de maíz',
            image: huevosPanMaizImage
        }
    ],
    comarcas: [
        {
            color: lavaColor,
            circleSize: 7,
            x: 0.18,
            y: 0.53,
            sectionId: 'barbanza',
            url: '../../comarca-barbanza.html',
            title: 'Recetas de Barbanza',
            image: barbanzaImage
        },
        {
            color: lavaColor,
            circleSize: 7,
            x: 0.42,
            y: 0.155,
            sectionId: 'ferrolterra',
            url: '../../comarca-ferrolterra.html',
            title: 'Recetas de Ferrolterra',
            image: ferrolterraImage
        },
        {
            color: lavaColor,
            circleSize: 7,
            x: 0.665,
            y: 0.10,
            sectionId: 'marina',
            url: '../../comarca-marina.html',
            title: 'Recetas de A Mariña',
            image: marinaImage
        },
        {
            color: lavaColor,
            circleSize: 20,
            x: 0.5,
            y: 0.49,
            sectionId: 'galicia',
            url: '../../galicia.html',
            title: 'Recetas de Galicia',
            image: galiciaImage

        }]
}

export function buildCategoryListSection(items, elementIdToLoad) {
    items.forEach(i => {
        const comarcaDiv = buildCategory(i.title, i.image, i.url)
        document.getElementById(elementIdToLoad).appendChild(comarcaDiv);
    });
}

export function buildCategory(titleText, url, href) {
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
