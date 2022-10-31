import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { scene } from './index.js';

const material = new THREE.LineBasicMaterial({
	color: 0x0000ff
});

const points = [];
points.push( new THREE.Vector3( - 4, 0, 0 ) );
//points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 4, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

export const line = new THREE.Line( geometry, material );

const earthDiv = document.createElement( 'div' );
earthDiv.className = 'label';
earthDiv.textContent = 'line';
earthDiv.style.marginTop = '-1em';
earthDiv.style.color = 'white';
const earthLabel = new CSS2DObject( earthDiv );
earthLabel.position.set( 0, 0, 0 );
earthLabel.element.style.overflow = 'visible'
line.add( earthLabel );
earthLabel.layers.set( 0 );
console.log(earthLabel);