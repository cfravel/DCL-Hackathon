////////////////////////////////////////////////
// Conference Center Lotus Temple - SB-LT -9,145
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
// Create Scene Materials

//const terraCottaGravelMaterial = new Material()
//terraCottaGravelMaterial.albedoTexture = "materials/Tileable-Textures/Img_3269_cropped_2048_Completed_B01.jpg"

const grassyFineMaterial = new Material()
grassyFineMaterial.albedoTexture = "materials/Tileable-Textures/grassy-512-1-0.png"
grassyFineMaterial.albedoColor = new Color3(1, 1, 1)


//////////////////////////////////////////
// Load Model Shapes

const lotusTempleShape = new GLTFShape("models/Lotus-Temple/Lotus-Temple-EdgeSplit.gltf")
const nonagonShape = new GLTFShape("models/Lotus-Temple/Nonagon.gltf")

//lady mannequins models
const woman_SheerBeigeDressShape_8lHKzQ9Tg6G = new GLTFShape("models/People/8lHKzQ9Tg6G/8lHKzQ9Tg6G.glb")
//const woman_GoldDressShape_3yYNfROogq0 = new GLTFShape("models/People/3yYNfROogq0/3yYNfROogq0.glb")
//const woman_RedHoodieShape_a21wZcnzdQd = new GLTFShape("models/People/a21wZcnzdQd/a21wZcnzdQd.glb")
//const woman_CasualFuschiaBLouseShape_7PNIMdmMSPD = new GLTFShape("models/People/7PNIMdmMSPD/7PNIMdmMSPD.glb")


//////////////////////////////////////////
// Create Initial Scene Entities

/*
<scene>
	<entity position="35 0 30">
		<gltf-model src='models/Lotus-Temple/Lotus-Temple-EdgeSplit.gltf' position="0 0 0" scale="2 2 2" rotation="0 13.5 0"></gltf-model>
		<gltf-model src='models/Lotus-Temple/Novagon.gltf' position="0 0.18 0" scale="30 10 30" rotation="0 -11 0" color="#1F3216"></gltf-model>
		<gltf-model src='models/Lotus-Temple/Novagon.gltf' position="0 0.36 0" scale="29.5 10 29.5" rotation="0 -11 0" color="#1F3216"></gltf-model>
		<gltf-model src='models/Lotus-Temple/Novagon.gltf' position="0 0.54 0" scale="29 10 29" rotation="0 -11 0" color="#1F3216"></gltf-model>
		<gltf-model src='models/People/8lHKzQ9Tg6G/8lHKzQ9Tg6G.gltf' scale="1 1 1" position="-10 -0.3 -22" rotation="0 -45 0"></gltf-model>
	</entity>
</scene>

*/

// Path
//const pathMainExtended = spawnBoxX(15, -0.01, 20, 0, 0, 0, 10, 0.02, 40)
//pathMainExtended.set(terraCottaGravelMaterial)

// Lawn
const lawn = spawnBoxX(35, 0, 30, 0, 0, 0, 70, 0.02, 60)
lawn.set(grassyFineMaterial)

// Temple and Nonagon stairs platforms
const lotusTemple = spawnGltfX(lotusTempleShape, 35, 0, 30, 0, 13.5, 0, 2, 2, 2)
const nonagon1 = spawnGltfX(nonagonShape, 35, 0.08, 30, 0, -11, 0, 30, 8, 30)
const nonagon2 = spawnGltfX(nonagonShape, 35, 0.16, 30, 0, -11, 0, 29.5, 8, 29.5)
const nonagon3 = spawnGltfX(nonagonShape, 35, 0.24, 30, 0, -11, 0, 29, 8, 29)

const woman_SheerBeigeDress_8lHKzQ9Tg6G = spawnGltfX(woman_SheerBeigeDressShape_8lHKzQ9Tg6G, 22, 0, 4, 0, 0, 0, 1, 1, 1)



