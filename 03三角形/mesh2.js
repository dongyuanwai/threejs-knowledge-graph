import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshBasicMaterial(({
    color: new THREE.Color('orange')
}));
const mesh = new THREE.Mesh(geometry, material);

console.log("mesh", mesh);

export default mesh;
