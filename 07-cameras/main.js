import {
  Mesh,
  MeshBasicMaterial,
  BoxGeometry,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const canvas = document.querySelector("#canvas");

const size = {
  width: 800,
  height: 500,
};

// Scene
const scene = new Scene();

// Object
const cube = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(cube);

// Camera
const camera = new PerspectiveCamera(50, size.width / size.height);
camera.position.z = 5;

// Renderer
const renderer = new WebGLRenderer({
  canvas,
});
renderer.setSize(size.width, size.height);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

function tick() {
  controls.update();

  // Render
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}

tick();
