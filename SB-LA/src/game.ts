////////////////////////////////////////////////
// Large Amphitheater
// (c) 2019 Decentraland Conference Center LLC
////////////////////////////////////////////////

//////////////////////////////////////////
// Spawner factory functions

function spawnEntity(x: number, y: number, z: number, rx: number, ry: number, rz: number, sx: number, sy: number, sz: number) {
  // create the entity
  const entity = new Entity()
  // set a transform to the entity
  const transform = new Transform({ position: new Vector3(x, y, z) })
  transform.rotation.setEuler(rx, ry, rz)
  transform.scale.set(sx, sy, sz)
  entity.set(transform)
  // add the entity to the engine
  engine.addEntity(entity)
  return entity
}

function spawnBoxX(x: number, y: number, z: number, rx: number, ry: number, rz: number, sx: number, sy: number, sz: number) {
  const entity = spawnEntity(x,y,z,rx,ry,rz,sx,sy,sz)
  // set a shape to the entity
  entity.set(new BoxShape())
  return entity
}

function spawnBox(x: number, y: number, z: number) {
  return spawnBoxX(x,y,z,0,0,0,1,1,1)
}

function spawnConeX(x: number, y: number, z: number, rx: number, ry: number, rz: number, sx: number, sy: number, sz: number) {
  const entity = spawnEntity(x,y,z,rx,ry,rz,sx,sy,sz)
  // set a shape to the entity
  entity.set(new ConeShape())
  return entity
}

function spawnCone(x: number, y: number, z: number) {
  return spawnConeX(x,y,z,0,0,0,1,1,1)
}

function spawnCylinderX(x: number, y: number, z: number, rx: number, ry: number, rz: number, sx: number, sy: number, sz: number) {
  const entity = spawnEntity(x,y,z,rx,ry,rz,sx,sy,sz)
  // set a shape to the entity
  entity.set(new CylinderShape())
  return entity
}

function spawnCylinder(x: number, y: number, z: number) {
  return spawnCylinderX(x,y,z,0,0,0,1,1,1)
}

function spawnGltfX(s: GLTFShape, x: number, y: number, z: number, rx: number, ry: number, rz: number, sx: number, sy: number, sz: number) {
  const entity = spawnEntity(x,y,z,rx,ry,rz,sx,sy,sz)
  // set a shape to the entity
  entity.set(s)
  return entity
}

function spawnGltf(s: GLTFShape, x: number, y: number, z: number) {
  return spawnGltfX(s,x,y,z,0,0,0,1,1,1)
}

function spawnPlaneX(x: number, y: number, z: number, rx: number, ry: number, rz: number, sx: number, sy: number, sz: number) {
  const entity = spawnEntity(x,y,z,rx,ry,rz,sx,sy,sz)
  // set a shape to the entity
  entity.set(new PlaneShape())
  return entity
}

function spawnPlane(x: number, y: number, z: number) {
  return spawnPlaneX(x,y,z,0,0,0,1,1,1)
}

function spawnSphereX(x: number, y: number, z: number, rx: number, ry: number, rz: number, sx: number, sy: number, sz: number) {
  const entity = spawnEntity(x,y,z,rx,ry,rz,sx,sy,sz)
  // set a shape to the entity
  entity.set(new SphereShape())
  return entity
}

function spawnSphere(x: number, y: number, z: number) {
  return spawnSphereX(x,y,z,0,0,0,1,1,1)
}

function spawnTextX(value: string, x: number, y: number, z: number, rx: number, ry: number, rz: number, sx: number, sy: number, sz: number) {
  const entity = spawnEntity(x,y,z,rx,ry,rz,sx,sy,sz)
  // set a shape to the entity
  entity.set(new TextShape(value))
  return entity
}

function spawnText(value: string, x: number, y: number, z: number) {
  return spawnTextX(value,x, y,z,0,0,0,1,1,1)
}

 
//////////////////////////////////////////
// Static Markup conversion could output the sections above as standard code, 
// and convert the static markup into the following Materials and Entities sections
//////////////////////////////////////////

//////////////////////////////////////////
// Create Colors
//const BLACK = Color3.Black

//////////////////////////////////////////
// Create Scene Materials

const grassyFineMaterial = new Material()
grassyFineMaterial.albedoTexture = "materials/Tileable-Textures/grassy-512-1-0.png"
grassyFineMaterial.albedoColor = new Color3(1, 1, 1)


//////////////////////////////////////////
// Load Model Shapes

// Large Amphitheater model
//const largeAmphitheaterShape = new GLTFShape("models/2019-01-03_Amphiheater_Full_A01/03_01_2019_Amphittheatre_Export_A03.gltf")
//const largeAmphitheaterShape = new GLTFShape("models/LA-20190113-gltf-babylon/LA-20190113-gltf-babylon.glb")
//const largeAmphitheaterShape = new GLTFShape("models/2018-08-28-Amphitheatre/21_08_2018_Amphitheatre_Export_A01.gltf")
//const largeAmphitheaterShape = new GLTFShape("models/18_01_2019_Amphitheatre_Export_Elements_A01/18_01_2019_Amphitheatre_Export_Elements_A01.gltf")
const largeAmphitheaterShape = new GLTFShape("models/2019_01_25_Amphitheater_GLB_A01/2019_01_25_Amphitheater_GLB_A01.glb")

//lady mannequins models
const woman_SheerBeigheDressShape_8lHKzQ9Tg6G = new GLTFShape("models/People/8lHKzQ9Tg6G/8lHKzQ9Tg6G.glb")
const woman_GoldDressShape_3yYNfROogq0 = new GLTFShape("models/People/3yYNfROogq0/3yYNfROogq0.glb")
const woman_RedHoodieShape_a21wZcnzdQd = new GLTFShape("models/People/a21wZcnzdQd/a21wZcnzdQd.glb")
const woman_CasualFuschiaBLouseShape_7PNIMdmMSPD = new GLTFShape("models/People/7PNIMdmMSPD/7PNIMdmMSPD.glb")


//////////////////////////////////////////
// Create Initial Scene Entities


//<scene>
//	<box color="#054005" scale="89.99 0.02 69.99" position="45 -0.01 35"></box>
//	<gltf-model src='models/2019-01-03_Amphiheater_Full_A01/03_01_2019_Amphittheatre_Export_A03.gltf' position="42.5 0.17 46.45" scale="0.4 0.4 0.4"></gltf-model>
//	<gltf-model src='models/People/8lHKzQ9Tg6G/8lHKzQ9Tg6G.gltf' scale="1 1 1" position="15 -0.25 8" rotation="0 0 0"></gltf-model>
//	<gltf-model src='models/People/3yYNfROogq0/3yYNfROogq0.gltf' scale="1 1 1" position="8 -0.3 46" rotation="0 340 0"></gltf-model>
//	<gltf-model src='models/People/a21wZcnzdQd/a21wZcnzdQd.gltf' scale="1 1 1" position="80 -0.25 8" rotation="0 0 0"></gltf-model>
//	<gltf-model src='models/People/8lHKzQ9Tg6G/8lHKzQ9Tg6G.gltf' scale="1 1 1" position="89 -0.3 41" rotation="0 45 0"></gltf-model>
//	<gltf-model src='models/People/7PNIMdmMSPD/7PNIMdmMSPD.gltf' scale="1 1 1" position="35 0 49" rotation="0 -90 0"></gltf-model>
//	<gltf-model src='models/People/8lHKzQ9Tg6G/8lHKzQ9Tg6G.gltf' scale="1 1 1" position="39 0.27 36" rotation="0 180 0"></gltf-model>
//	<gltf-model src='models/People/3yYNfROogq0/3yYNfROogq0.gltf' scale="1 1 1" position="49.5 -0.25 50" rotation="0 0 0"></gltf-model>
//</scene>

const groundPlane = spawnPlaneX(45, 0, 35, 90, 0, 0, 90, 70, 70)
groundPlane.set(grassyFineMaterial)

// const groundBox = spawnBoxX(45, 3, 35, 0, 0, 0, 89.99, 0.02, 69.99)
// groundBox.set(grassyFineMaterial)

const largeAmphitheater = spawnGltfX(largeAmphitheaterShape, 42.5, 0.17, 46.45, 0, 0, 0, 0.4, 0.4, 0.4)


//lady mannequins 
const woman_SheerBeigheDress_8lHKzQ9Tg6G_1 = spawnGltfX(woman_SheerBeigheDressShape_8lHKzQ9Tg6G, 10.6, 0, 6.5, 0, 0, 0, 1, 1, 1)
//const box1 = spawnBoxX(10.6, 0, 6.5, 0, 0, 0, 0.3, 0.01, 0.3)

const woman_GoldDress_3yYNfROogq0_1 = spawnGltfX(woman_GoldDressShape_3yYNfROogq0, 4.4, 0, 43, 0, 340, 0, 1, 1, 1)
//const box2 = spawnBoxX(4.4, 0, 43, 0, 0, 0, 0.3, 0.01, 0.3)

const woman_RedHoodie_a21wZcnzdQd_1 = spawnGltfX(woman_RedHoodieShape_a21wZcnzdQd, 67.2, 0, 5.7, 0, 0, 0, 1, 1, 1)
//const box3 = spawnBoxX(67.2, 0, 5.7, 0, 0, 0, 0.3, 0.01, 0.3)

const woman_SheerBeigheDress_8lHKzQ9Tg6G_2 = spawnGltfX(woman_SheerBeigheDressShape_8lHKzQ9Tg6G, 84.8, 0, 43, 0, 45, 0, 1, 1, 1)
//const box4 = spawnBoxX(84.8, 0, 43, 0, 0, 0, 0.3, 0.01, 0.3)

const woman_CasualFuschiaBLouse_7PNIMdmMSPD_1 = spawnGltfX(woman_CasualFuschiaBLouseShape_7PNIMdmMSPD, 33.4, 0.3, 53.4, 0, 90, 0, 1, 1, 1)
//const box5 = spawnBoxX(33.4, 0.3, 53.4, 0, 0, 0, 0.3, 0.01, 0.3)

const woman_SheerBeigheDress_8lHKzQ9Tg6G_3 = spawnGltfX(woman_SheerBeigheDressShape_8lHKzQ9Tg6G, 43.4, 0.5, 37.6, 0, 180, 0, 1, 1, 1)
//const box6 = spawnBoxX(43.4, 0.5, 37.6, 0, 0, 0, 0.3, 0.01, 0.3)

const woman_GoldDress_3yYNfROogq0_2 = spawnGltfX(woman_GoldDressShape_3yYNfROogq0, 45.1, 0, 48.4, 0, 0, 0, 1, 1, 1)
//const box7 = spawnBoxX(45.1, 0, 48.4, 0, 0, 0, 0.3, 0.01, 0.3)


//////////////////////////////////////////
// Dynamic Behavior


