import barbanzaImage from '../images/comarcas/barbanza.jpg';
import marinaImage from '../images/comarcas/marina.jpg';
import ferrolterraImage from '../images/comarcas/ferrolterra.jpg';
import galiciaImage from '../images/comarcas/galicia.jpg';
import empanadaImage from '../images/recetas/empanada_maiz.png';
import huevosPanMaizImage from '../images/recetas/huevos_pan_maiz.png';

const lavaColor = '#cf081fff';

export const data = {
    comarcas: [
        {
            color: lavaColor,
            circleSize: 7,
            x: 0.18,
            y: 0.53,
            sectionId: 'barbanza',
            url: '../../comarca-barbanza.html',
            alt: 'imagen representativa de la comarca del barbanza',
            title: 'Recetas de Barbanza',
            image: barbanzaImage
        },
        {
            color: lavaColor,
            circleSize: 7,
            x: 0.42,
            y: 0.155,
            sectionId: 'ferrolterra',
            alt: 'imagen representativa de la comarca de ferrolterra',
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
            alt: 'imagen representativa de la comarca de A Mariña',
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
            alt: 'imagen representativa de Galicia',
            title: 'Recetas de Galicia',
            image: galiciaImage

        }],
    recipesBarbanza: [
        {
            url: '../../receta-empanada.html',
            alt: 'imagen de una receta de empanada de maíz',
            title: 'Empanada de maíz',
            image: empanadaImage
        },
        {
            url: '../../receta-huevos-pan-maiz.html',
            alt: 'imagen de una receta de huevos con pan de maíz',
            title: 'Huevos con pan de maíz',
            image: huevosPanMaizImage
        }
    ]
}


