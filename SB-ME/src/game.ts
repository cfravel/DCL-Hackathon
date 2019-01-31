////////////////////////////////////////////////
// Conference Center Main Entrance - ME -15,140 exended to 60m North
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

const terraCottaGravelMaterial = new Material()
terraCottaGravelMaterial.albedoTexture = "materials/Tileable-Textures/Img_3269_cropped_2048_Completed_B01.jpg"

const grassyFineMaterial = new Material()
grassyFineMaterial.albedoTexture = "materials/Tileable-Textures/grassy-512-1-0.png"
grassyFineMaterial.albedoColor = new Color3(1, 1, 1)

const brownWoodMaterial = new Material()
brownWoodMaterial.albedoColor = new Color3(.1, .02, 0) // ~ #7D462B

const mapMaterial = new Material()
mapMaterial.albedoTexture = "materials/Signage/SandboxMap.png"


//////////////////////////////////////////
// Load Model Shapes

const mainGateShape = new GLTFShape("models/Main-Gate/MainGateWithDelimiters.glb")

//lady mannequins models
//const woman_SheerBeigheDressShape_8lHKzQ9Tg6G = new GLTFShape("models/People/8lHKzQ9Tg6G/8lHKzQ9Tg6G.glb")
const woman_GoldDressShape_3yYNfROogq0 = new GLTFShape("models/People/3yYNfROogq0/3yYNfROogq0.glb")
//const woman_RedHoodieShape_a21wZcnzdQd = new GLTFShape("models/People/a21wZcnzdQd/a21wZcnzdQd.glb")
//const woman_CasualFuschiaBLouseShape_7PNIMdmMSPD = new GLTFShape("models/People/7PNIMdmMSPD/7PNIMdmMSPD.glb")


//////////////////////////////////////////
// Create Initial Scene Entities

/*
		<a-entity id="ME-main-entrance" position="0 0 -10">
		  <a-box color="#FFFFFF" position="0 -0.01 0" depth="20" height="0.02" width="10" material="src: #terracotta-gravel-texture; repeat: 10 20"></a-box>
		  <a-box color="#9BEAA4" position="10 -0.01 0" depth="20" height="0.02" width="10" material="src: #grassy-fine-texture; repeat: 10 20"></a-box>
		  <a-box color="#9BEAA4" position="-10 -0.01 0" depth="20" height="0.02" width="10" material="src: #grassy-fine-texture; repeat: 10 20"></a-box>
		  <a-gltf-model src='models/Main-Gate/Main-Gate.gltf' scale="1.55 1 1" position="0 0 8.5"></a-gltf-model>
		    <a-entity id="sign-layout-ME" position="6 0 5">
		      <a-box color="#7D462B" position="0 0.5 0" depth=".05" height="1" width=".05"></a-box>
		      <a-entity id="sign-layout-top" position="0 1 0" rotation="45 0 0">
		        <a-box color="#A0A0A0" position="0 0 0" depth="1.713" height="0.07" width="2" material="src: #layout-map; repeat: 1 1 1"></a-box>
		        <a-sphere color="#FF0000" position="-0.27 .04 0.65" radius=".02"></a-sphere>
		      </a-entity>
		        <a-link href="http://fravel.net/webvr/DCLCC-0.01/index-patio.html" position="2 1 0" title="Patio" image="#link-patio" peekMode="true"></a-link>
		    </a-entity>
		  <a-gltf-model src='models/People/3yYNfROogq0/3yYNfROogq0.gltf' scale="1 1 1" position="8 -0.25 8" rotation="0 0 0"></a-gltf-model>
		</a-entity>

*/

// Path
const pathMainExtended = spawnBoxX(15, -0.01, 20, 0, 0, 0, 10, 0.02, 40)
pathMainExtended.set(terraCottaGravelMaterial)

// Lawns
const lawnEast= spawnBoxX(5, -0.01, 20, 0, 0, 0, 10, 0.02, 40)
lawnEast.set(grassyFineMaterial)

const lawnWest= spawnBoxX(25, -0.01, 20, 0, 0, 0, 10, 0.02, 40)
lawnWest.set(grassyFineMaterial)


// Main Gate
const mainGate = spawnGltfX(mainGateShape, 15, 0, 3.5, 0, 0, 0, 1.55, 1, 1)
const woman_GoldDress_3yYNfROogq0_2 = spawnGltfX(woman_GoldDressShape_3yYNfROogq0, 22, 0, 4, 0, 40, 0, 1, 1, 1)

// Map Sign
const post = spawnBoxX(21, 0.5, 12, 0, 0, 0, .05, 1, .05)
post.set(brownWoodMaterial)

const panel = spawnBoxX(21, 1, 12, 0, 90, -45, 1, 0.03, 1.7)
panel.set(mapMaterial)

