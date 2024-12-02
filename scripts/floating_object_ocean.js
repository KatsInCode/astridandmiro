import { randomInt } from './util.js';

const fishes = document.getElementsByClassName('fish');

const fishData = Array.from(fishes).map(() => ({
    positionX: Math.random() * window.innerWidth,
    positionY: Math.random() * window.innerHeight,
    directionX: Math.random() > 0.5 ? 1 : -1,
    directionY: Math.random() > 0.5 ? 1 : -1,
    speedX: randomInt(1, 4) * 1,
    speedY: randomInt(1, 4) * 1,
    amplitude: Math.random() * 10,
    frequency: 0.05 + Math.random() * 0.01,
}));

function moveObjects() {
    Array.from(fishes).forEach((fish, index) => {
        const data = fishData[index];
        data.positionX += data.directionX * data.speedX;

        const maxOffscreenLimit = window.innerWidth + 512;
        if (data.positionX > maxOffscreenLimit || data.positionX < -512) {
            data.directionX *= -1;
        }
        data.positionY += data.directionY * data.speedY;

        if (data.positionY > window.innerHeight - 55 || data.positionY < 0) {
            data.directionY *= -1;
        }

        data.positionY += Math.sin(data.positionX * data.frequency) * data.amplitude;

        //update
        fish.style.left = data.positionX + 'px';
        fish.style.top = data.positionY + 'px';
    });

    requestAnimationFrame(moveObjects);
}
moveObjects();
