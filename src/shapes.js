import * as THREE from 'three';

const radius = 0.2;
const widthSegments = 12;
const heightSegments = 8;

const geometry1 = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue

export const sphere1 = new THREE.Mesh(geometry1, material);
sphere1.position.x=4;

export const sphere2 = new THREE.Mesh(geometry1, material);
sphere2.position.x=-4;