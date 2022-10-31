import * as THREE from 'three';
import { sphere1, sphere2 } from './shapes';
import { line } from './line.js';

export const linia_cala=new THREE.Group();

linia_cala.add(sphere1);
linia_cala.add(sphere2);
linia_cala.add(line);

