import galiciaMapImage from './src/images/galicia_no_background.png';
import('./comarca-barbanza.html')

const galiciaMapSection = document.getElementById('galicia-map-section');
const lavaColor = '#cf081fff';
const screenWidth = window.innerWidth;
const isDesktop = screenWidth > 1024;

window.onload = () => {
    const canvasWidthAndHeight = Math.trunc(isDesktop ? screenWidth / 3 : screenWidth);
    const canvas = document.createElement("canvas");
    canvas.width = canvasWidthAndHeight;
    canvas.height = canvasWidthAndHeight;
    canvas.id = 'galicia-canvas';

    getGaliciaMapImage().onload = (e) => {
        const image = e.target;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvasWidthAndHeight, canvasWidthAndHeight);

        galiciaMapSection.appendChild(canvas);
        drawElements(ctx, canvas);
    }
}

function drawElements(context, canvas) {
    const w = canvas.width;
    const h = canvas.height;
    const elements = [
        {
            color: lavaColor,
            circleSize: 7,
            x: Math.trunc(w * 0.18),
            y: Math.trunc(h * 0.53),
            sectionId: 'barbanza',
            url: './comarca-barbanza.html'
        },
        {
            color: lavaColor,
            circleSize: 7,
            x: Math.trunc(w * 0.42),
            y: Math.trunc(h * 0.155),
            sectionId: 'ferrolterra',
            url: './comarca-ferrolterra.html'
        },
        {
            color: lavaColor,
            circleSize: 7,
            x: Math.trunc(w * 0.665),
            y: Math.trunc(h * 0.10),
            sectionId: 'marina',
            url: './comarca-marina.html'
        },
        {
            color: lavaColor,
            circleSize: 20,
            x: Math.trunc(w * 0.5),
            y: Math.trunc(h * 0.49),
            sectionId: 'galicia',
            url: './galicia.html'
        }
    ];
    elements.forEach(e => drawCircle(context, e));

    canvas.addEventListener('click', function (event) {
        const x = event.pageX - canvas.offsetLeft;
        const y = event.pageY - canvas.offsetTop;
        elements.forEach(function (e) {
            if (pointInCircle(e.x, e.y, x, y, e.circleSize, 50)) {
                console.log(e.sectionId)
                window.location = e.url;
            }
        });
    });
}

function pointInCircle(x, y, cx, cy, radius, tolerance) {
    const distanceSquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distanceSquared <= radius * radius + (tolerance * tolerance);
}

function getGaliciaMapImage() {
    const image = new Image();
    image.src = galiciaMapImage;
    image.alt = 'mapa de galicia';
    image.id = 'galicia-map';
    return image;
}

function drawCircle(context, e) {
    context.beginPath();
    context.arc(e.x, e.y, e.circleSize, 0, Math.PI * 2, true);
    context.fillStyle = e.color;
    context.fill();
    context.closePath();
}

