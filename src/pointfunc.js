import * as THREE from 'three';


export function drawline(xa,ya,xb,yb){
    const radius = 0.2;
const widthSegments = 12;
const heightSegments = 8;

const geometry1 = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue

const sphere1 = new THREE.Mesh(geometry1, material);
sphere1.position.x=xa;
sphere1.position.y=ya;

const sphere2 = new THREE.Mesh(geometry1, material);
sphere2.position.x=xb;
sphere2.position.y=yb

const pointscollection=[]
pointscollection.push(sphere1);
pointscollection.push(sphere2);




return pointscollection;
}