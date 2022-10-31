import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';


export function line_creation(xa, ya, xb, yb,labelText) {

    const radius = 0.2;
    const widthSegments = 12;
    const heightSegments = 8;

    const geometry1 = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });  // greenish blue

    const sphere1 = new THREE.Mesh(geometry1, material);
    sphere1.position.x = xa;
    sphere1.position.y = ya;

    const sphere2 = new THREE.Mesh(geometry1, material);
    sphere2.position.x = xb;
    sphere2.position.y = yb

    const material2 = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });

    const points = [];
    points.push(new THREE.Vector3(xa, ya, 0));
    //points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push(new THREE.Vector3(xb, yb, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material2);

    const earthDiv = document.createElement('div');
    earthDiv.className = 'label';
    earthDiv.textContent = labelText;
    earthDiv.style.marginTop = '-1em';
    earthDiv.style.color = 'white';
    const earthLabel = new CSS2DObject(earthDiv);
    earthLabel.position.set(0, 0, 0);
    earthLabel.element.style.overflow = 'visible'
    line.add(earthLabel);
    earthLabel.layers.set(0);

    const linia_cala = new THREE.Group();

    linia_cala.add(sphere1);
    linia_cala.add(sphere2);
    linia_cala.add(line);

    return linia_cala
}