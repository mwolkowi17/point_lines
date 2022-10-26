import * as THREE from 'three';

const material = new THREE.LineBasicMaterial({
	color: 0x0000ff
});

const points = [];
points.push( new THREE.Vector3( - 4, 0, 0 ) );
//points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 4, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

export const line = new THREE.Line( geometry, material );