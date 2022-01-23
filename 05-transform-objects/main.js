import {
  Mesh,
  MeshBasicMaterial,
  BoxGeometry,
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Group,
} from "three";

const canvas = document.querySelector("#canvas");
const size = {
  width: 800,
  height: 500,
};

// Scene
const scene = new Scene();

const group = new Group();
scene.add(group);

// Object
const cube1 = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new Mesh(
  new BoxGeometry(0.75, 0.75, 0.75),
  new MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.set(0, 0.875, 0);
group.add(cube2);

const cube3 = new Mesh(
  new BoxGeometry(0.5, 0.5, 0.5),
  new MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.set(0, 1.5, 0);
group.add(cube3);

// Camera
const camera = new PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
camera.position.y = 0.55;
scene.add(camera);

// Renderer
const renderer = new WebGLRenderer({
  canvas,
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
