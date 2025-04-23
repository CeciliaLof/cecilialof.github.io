import * as THREE from 'https://unpkg.com/three@0.152.2/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.152.2/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls;

init();

function init() {
  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Load scene from JSON
  const loader = new THREE.ObjectLoader();
  loader.load('models/duckmodel.json', (loadedScene) => {
    scene = loadedScene;

    // Find camera
    camera = scene.getObjectByProperty('type', 'PerspectiveCamera');
    if (!camera) {
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 1.5, 3);
      scene.add(camera);
    }

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
