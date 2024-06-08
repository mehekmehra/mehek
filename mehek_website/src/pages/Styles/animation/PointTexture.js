import * as THREE from "three";

export function createPointTexture() {
    const size = 25;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");

    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    context.fillStyle = "#1D1E1E";
    context.fill();

    return new THREE.CanvasTexture(canvas);
}