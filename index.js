import galiciaMapImage from './src/images/galicia_no_background.png';
import './src/scripts/data';
import {comarcas} from './src/scripts/data';
import('./comarca-barbanza.html')
import('./comarca-ferrolterra.html')
import('./comarca-marina.html')
import('./galicia.html')

const galiciaMapSection = document.getElementById('galicia-map-section');
const screenWidth = window.innerWidth;
const isDesktop = screenWidth > 1024;

window.onload = () => {

    const canvasWidthAndHeight = Math.trunc(isDesktop ? screenWidth / 3 : screenWidth);
    const canvas = createCanvas('galicia-canvas', canvasWidthAndHeight);

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

    comarcas.forEach(e => {
        e.x = Math.trunc(e.x * w);
        e.y = Math.trunc(e.y * h);
        drawCircle(context, e)
    });

    canvas.addEventListener('click', function (event) {
        const x = event.pageX - canvas.offsetLeft;
        const y = event.pageY - canvas.offsetTop;
        comarcas.forEach(function (e) {
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

function createCanvas(id, canvasWidthAndHeight) {
    const canvas = document.createElement("canvas");
    canvas.width = canvasWidthAndHeight;
    canvas.height = canvasWidthAndHeight;
    canvas.id = id;
    return canvas;
}

