
import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';
//import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { light2, light3, light4 } from './direct_light.js';
import {cube} from './box.js'
import { TWEEN } from '../node_modules/three/examples/jsm/libs/tween.module.min'
import { sphere1,sphere2 } from './shapes';
import {line} from './line'
import { drawline } from './pointfunc';
import { linia_cala } from './group_test';
import {line_creation} from './linePointCreation.js';


//require("./loader.js");

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const labelRenderer = new CSS3DRenderer();
				labelRenderer.setSize( window.innerWidth, window.innerHeight );
				labelRenderer.domElement.style.position = 'absolute';
				labelRenderer.domElement.style.top = '0px';
				document.body.appendChild( labelRenderer.domElement );

scene.background = new THREE.Color(0x000000);

scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);
//scene.add(cube);
// scene.add(sphere1);
// scene.add(sphere2);
// scene.add(line);
// scene.add(linia_cala)
scene.add(line_creation(-5,3,5,3,'line'))
scene.add(line_creation(-7,5,7,5,'line2'))
scene.add(line_creation(-8,1,4,1,'line3'))


//test segment
//scene.add(drawline(-5,3,5,3)[0]);
//scene.add(drawline(-5,3,5,3)[1]);

camera.position.z =15;
const controls = new OrbitControls(camera, labelRenderer.domElement);
controls.update();



const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;

    TWEEN.update()
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}

animate();