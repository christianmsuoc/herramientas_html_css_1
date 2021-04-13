import galiciaMapImage from './src/images/galicia_no_background.png';
import './src/scripts/data';
import {data} from './src/scripts/data';
const empanadaArticle = import('./empanada-article.html')

const galiciaMapSection = document.getElementById('galicia-map-section');
const screenWidth = window.innerWidth;

window.onload = () => {

    const canvasWidthAndHeight = document.getElementById("galicia-map-section").offsetWidth * 0.7
    const canvas = createCanvas('galicia-canvas', canvasWidthAndHeight);


    getGaliciaMapImage().onload = (e) => {
        const image = e.target;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvasWidthAndHeight, canvasWidthAndHeight);

        galiciaMapSection.appendChild(canvas);
        drawElements(ctx, canvas);
    }

    if (typeof displayLastArticle !== "undefined" && displayLastArticle === true) {
        empanadaArticle.then(content => {
            const mainSection = document.getElementById('main-section')
            mainSection.innerHTML = mainSection.innerHTML + content;
        });
    }
}

function drawElements(context, canvas) {
    const w = canvas.width;
    const h = canvas.width;
    data.comarcas.forEach(e => {
        e.x = e.x * w;
        e.y = e.y * h;
        drawCircle(context, e)
    });

    canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        mapClick(touch.pageX, touch.pageY, canvas)
    });
    canvas.addEventListener('click', (e) => mapClick(e.pageX, e.pageY, canvas));
}

function mapClick(xEvent, yEvent, canvas) {
    const x = xEvent - canvas.offsetLeft;
    const y = yEvent - canvas.offsetTop;

    data.comarcas.forEach(function (e) {
        if (pointInCircle(e.x, e.y, x, y, e.circleSize, 0.02 * screenWidth)) {
            window.location = e.url
        }
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

