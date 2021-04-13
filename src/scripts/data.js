import barbanzaImage from '../../src/images/barbanza.jpg';
import marinaImage from '../../src/images/marina.jpg';
import ferrolterraImage from '../../src/images/ferrolterra.jpg';
import galiciaImage from '../../src/images/galicia.jpg';

const barbanza =  fetch('../../comarca-barbanza.html');
const ferrolterra =  fetch('../../comarca-ferrolterra.html');
const marina =  fetch('../../comarca-marina.html');
const galicia =  fetch('../../galicia.html');

const lavaColor = '#cf081fff';

export const comarcas = [
    {
        color: lavaColor,
        circleSize: 7,
        x: 0.18,
        y: 0.53,
        sectionId: 'barbanza',
        url: barbanza,
        title: 'Recetas de Barbanza',
        image: barbanzaImage
    },
    {
        color: lavaColor,
        circleSize: 7,
        x: 0.42,
        y: 0.155,
        sectionId: 'ferrolterra',
        url: ferrolterra,
        title: 'Recetas de Ferrolterra',
        image: ferrolterraImage
    },
    {
        color: lavaColor,
        circleSize: 7,
        x: 0.665,
        y: 0.10,
        sectionId: 'marina',
        url: marina,
        title: 'Recetas de A Mariña',
        image: marinaImage
    },
    {
        color: lavaColor,
        circleSize: 20,
        x: 0.5,
        y: 0.49,
        sectionId: 'galicia',
        url: galicia,
        title: 'Recetas de Galicia',
        image: galiciaImage
    }
];
