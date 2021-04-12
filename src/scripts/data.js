import barbanzaImage from '../../src/images/barbanza.jpg';
import marinaImage from '../../src/images/marina.jpg';
import ferrolterraImage from '../../src/images/ferrolterra.jpg';
import galiciaImage from '../../src/images/galicia.jpg';

const lavaColor = '#cf081fff';

export const comarcas = [
    {
        color: lavaColor,
        circleSize: 7,
        x: 0.18,
        y: 0.53,
        sectionId: 'barbanza',
        url: './comarca-barbanza.html',
        title: 'Recetas de Barbanza',
        image: barbanzaImage
    },
    {
        color: lavaColor,
        circleSize: 7,
        x: 0.42,
        y: 0.155,
        sectionId: 'ferrolterra',
        url: './comarca-ferrolterra.html',
        title: 'Recetas de Ferrolterra',
        image: ferrolterraImage
    },
    {
        color: lavaColor,
        circleSize: 7,
        x: 0.665,
        y: 0.10,
        sectionId: 'marina',
        url: './comarca-marina.html',
        title: 'Recetas de A Mariña',
        image: marinaImage
    },
    {
        color: lavaColor,
        circleSize: 20,
        x: 0.5,
        y: 0.49,
        sectionId: 'galicia',
        url: './galicia.html',
        title: 'Recetas de Galicia',
        image: galiciaImage
    }
];
