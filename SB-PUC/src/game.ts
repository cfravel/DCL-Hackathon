////////////////////////////////////////////////
// Conference Center Patio Cafe - PUC
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

const blondBrickMaterial = new Material()
blondBrickMaterial.albedoTexture = "materials/Tileable-Textures/IMG_3283_Edited_A01-Blonde-Brick.jpg"
blondBrickMaterial.albedoColor = new Color3(1, 1, 1)

const brownHardwoodMaterial = new Material()
brownHardwoodMaterial.albedoTexture = "materials/Tileable-Textures/Wood-2442.jpg"
brownHardwoodMaterial.albedoColor = new Color3(1, 1, 1)

const terraCottaGravelMaterial = new Material()
terraCottaGravelMaterial.albedoTexture = "materials/Tileable-Textures/Img_3269_cropped_2048_Completed_B01.jpg"


//////////////////////////////////////////
// Load Model Shapes

const cafeShape = new GLTFShape("models/Cafe/Cafe_Prototype_v0.5.glb")
const canopyTowersShape = new GLTFShape("models/Canopy-Towers/Canopy-Towers-v0.5.glb")

//lady mannequins models
//const woman_SheerBeigheDressShape_8lHKzQ9Tg6G = new GLTFShape("models/People/8lHKzQ9Tg6G/8lHKzQ9Tg6G.glb")
//const woman_GoldDressShape_3yYNfROogq0 = new GLTFShape("models/People/3yYNfROogq0/3yYNfROogq0.glb")
const woman_RedHoodieShape_a21wZcnzdQd = new GLTFShape("models/People/a21wZcnzdQd/a21wZcnzdQd.glb")
const woman_CasualFuschiaBLouseShape_7PNIMdmMSPD = new GLTFShape("models/People/7PNIMdmMSPD/7PNIMdmMSPD.glb")


//////////////////////////////////////////
// Create Initial Scene Entities

/*

	  <img id="blonde-brick-texture" src="models/Tileable-Textures/IMG_3283_Edited_A01-Blonde-Brick.jpg">

    <img id="brown-hardwood-texture" src="models/Tileable-Textures/Wood-2442.jpg">

		<a-entity id="P-patio" position="45 0 -70">
		  <a-box color="#C0C0B0" position="0 -0.01 0" depth="40" height="0.02" width="20" material="src: #blonde-brick-texture; repeat: 20 40"></a-box>
		  <a-gltf-model src='models/Canopy-Towers/Canopy-Towers-v0.4-no-colliders.gltf' scale="0.5 0.5 0.5" position="5 -0.01 0" rotation="0 0 0"></a-gltf-model>
		  <a-gltf-model src='models/People/a21wZcnzdQd/a21wZcnzdQd.gltf' scale="1 1 1" position="10 -0.3 0" rotation="0 -45 0"></a-gltf-model>
		</a-entity>
    <a-entity id="UC-unity-cafe" position="70 0 -75">
      <a-gltf-model src='models/Cafe/Cafe_Prototype_v0.5.gltf' scale="1 1 1" position="0 0 0" rotation="0 180 0"></a-gltf-model>
      <a-gltf-model src='models/People/7PNIMdmMSPD/7PNIMdmMSPD.gltf' scale="1 1 1" position="4 -0.3 5" rotation="0 -90 0"></a-gltf-model>
    </a-entity>
*/

// Patio
const patioGround = spawnBoxX(10, -0.01, 20, 0, 0, 0, 20, 0.02, 40,)
patioGround.set(blondBrickMaterial)

const canopyTowers = spawnGltfX(canopyTowersShape, 15, -0.03, 20, 0, 0, 0, 0.5, 0.5, 0.5)
const woman_RedHoodie_a21wZcnzdQd_1 = spawnGltfX(woman_RedHoodieShape_a21wZcnzdQd, 10, 0, 28, 0, 45, 0, 1, 1, 1)

// Cafe
const cafe = spawnGltfX(cafeShape, 35, 0, 25, 0, 180, 0, 1, 1, 1)
const woman_CasualFuschiaBLouse_7PNIMdmMSPD_1 = spawnGltfX(woman_CasualFuschiaBLouseShape_7PNIMdmMSPD, 38, 0, 24.5, 0, 90, 0, 1, 1, 1)

// Path y100 truncated
const pathY100_truncated = spawnBoxX(35, -0.01, 5, 0, 0, 0, 30, 0.02, 10,)
pathY100_truncated.set(terraCottaGravelMaterial)

