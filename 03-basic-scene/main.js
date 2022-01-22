import {
  Mesh,
  MeshBasicMaterial,
  BoxGeometry,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
} from "three";

const canvas = document.querySelector("#canvas");
const size = {
  width: 800,
  height: 500,
};

// Scene
const scene = new Scene();

// Object
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0xff0000 });
const cube1 = new Mesh(geometry, material);
scene.add(cube1);

// Camera
const camera = new PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new WebGLRenderer({
  canvas,
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
