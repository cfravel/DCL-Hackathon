////////////////////////////////////////////////
// SB-LA Large Amphitheater BIRD AND SOUND TEST WITHOUT AMPHITHEATER
// (c) 2019 Decentraland Conference Center LLC
////////////////////////////////////////////////

import { playSound } from "@decentraland/SoundController"

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
// Destinations
const locations: Vector3[] = [];
var numLocs = 0;

function pushLocation(entity: Entity) {
  let pos = entity.get(Transform).position
  let dest = new Vector3(pos.x, pos.y, pos.z)
  dest.y = 3 // 3m up in the tree.
  //log ("pushEntity x,y,z= ", dest.x, dest.y, dest.z)
  locations[numLocs++] = dest
}

function getNextLoc(loc1: number) {
  // Pick a destination location from locations[], but not the current loc1
  let locIndex : number = loc1 + 1 //!CF todo : For now just rotate to the next location, but later make it a random walk around the array.
  //let locIndex: number = loc1 + Math.random()*(numLocs-1) // this doesn't work.  Math.random() seems to return the same value on each call.  And the result of this calculation gives a float with decimals, which when converted to a string doesn't index the array to any existing value
  while (locIndex >= locations.length) {
    locIndex -= locations.length // wrap around from beginning
  }
  return locIndex
}


//////////////////////////////////////////
// Create Scene Materials

const grassyFineMaterial = new Material()
grassyFineMaterial.albedoTexture = "materials/Tileable-Textures/grassy-512-1-0.png"
grassyFineMaterial.albedoColor = new Color3(1, 1, 1)


//////////////////////////////////////////
// Load Model Shapes

// Trees
const treeA_FirShape = new GLTFShape("models/Flora/TreeA_Fir/TreeA_Optimised_28_June_2018_A01.babylon.gltf")
const treeB_PineShape = new GLTFShape("models/Flora/TreeB_Pine/28_June_2018_Fir_Tree_B_optimised_A01.gltf")
const treeC_LocustShape = new GLTFShape("models/Flora/TreeC_Locust/June_28_2018_Tree_C_OptimisedA01.gltf")
const treeD_SakuraShape = new GLTFShape("models/Flora/TreeD_Sakura/TreeD_Optimised_22_June_2018_A01.babylon.gltf")

// Sparrow
const sparrowShape = new GLTFShape("models/Fauna/Sparrow/Sparrow-burung-pipit.gltf")

//lady mannequins models
const woman_SheerBeigheDressShape_8lHKzQ9Tg6G = new GLTFShape("models/People/8lHKzQ9Tg6G/8lHKzQ9Tg6G.glb")
//const woman_GoldDressShape_3yYNfROogq0 = new GLTFShape("models/People/3yYNfROogq0/3yYNfROogq0.glb")
//const woman_RedHoodieShape_a21wZcnzdQd = new GLTFShape("models/People/a21wZcnzdQd/a21wZcnzdQd.glb")
//const woman_CasualFuschiaBLouseShape_7PNIMdmMSPD = new GLTFShape("models/People/7PNIMdmMSPD/7PNIMdmMSPD.glb")


//////////////////////////////////////////
// Create Initial Scene Entities


const groundPlane = spawnPlaneX(20, 0, 10,    90, 0, 0,     40, 20, 20)
groundPlane.set(grassyFineMaterial)

const treeA_Fir = spawnGltfX(treeA_FirShape, 5, 0, 5, 0, 0, 0, 0.15, 0.15, 0.15)
const treeB_Pine = spawnGltfX(treeB_PineShape, 5, -4, 15, 0, 0, 0, 0.05, 0.05, 0.05)
const treeC_Locust = spawnGltfX(treeC_LocustShape, 35, -1, 5, 0, 0, 0, 0.05, 0.05, 0.05)
const treeD_Sakura = spawnGltfX(treeD_SakuraShape, 35, 0, 15, 0, 0, 0, 0.05, 0.05, 0.05)

pushLocation(treeA_Fir)
pushLocation(treeC_Locust)
pushLocation(treeB_Pine)
pushLocation(treeD_Sakura)

//Fauna
const sparrow = spawnGltfX(sparrowShape, 10, 2, 10, 0, 0, 0, 0.025, 0.025, 0.025)

//!CF todo fix this up.  For now just force the bird to hide for the initial idle period
//engine.removeEntity(sparrow)


//lady mannequins
const woman_SheerBeigheDress_8lHKzQ9Tg6G_1 = spawnGltfX(woman_SheerBeigheDressShape_8lHKzQ9Tg6G, 10.6, 0, 6.5, 0, -70, 0, 1, 1, 1)
//const box1 = spawnBoxX(10.6, 0, 6.5, 0, 0, 0, 0.3, 0.01, 0.3)

//const woman_GoldDress_3yYNfROogq0_1 = spawnGltfX(woman_GoldDressShape_3yYNfROogq0, 4.4, 0, 43, 0, 340, 0, 1, 1, 1)
//const box2 = spawnBoxX(4.4, 0, 43, 0, 0, 0, 0.3, 0.01, 0.3)

//const woman_RedHoodie_a21wZcnzdQd_1 = spawnGltfX(woman_RedHoodieShape_a21wZcnzdQd, 67.2, 0, 5.7, 0, 0, 0, 1, 1, 1)
//const box3 = spawnBoxX(67.2, 0, 5.7, 0, 0, 0, 0.3, 0.01, 0.3)

//const woman_SheerBeigheDress_8lHKzQ9Tg6G_2 = spawnGltfX(woman_SheerBeigheDressShape_8lHKzQ9Tg6G, 84.8, 0, 43, 0, 45, 0, 1, 1, 1)
//const box4 = spawnBoxX(84.8, 0, 43, 0, 0, 0, 0.3, 0.01, 0.3)

//const woman_CasualFuschiaBLouse_7PNIMdmMSPD_1 = spawnGltfX(woman_CasualFuschiaBLouseShape_7PNIMdmMSPD, 33.4, 0.3, 53.4, 0, 90, 0, 1, 1, 1)
//const box5 = spawnBoxX(33.4, 0.3, 53.4, 0, 0, 0, 0.3, 0.01, 0.3)

//const woman_SheerBeigheDress_8lHKzQ9Tg6G_3 = spawnGltfX(woman_SheerBeigheDressShape_8lHKzQ9Tg6G, 43.4, 0.5, 37.6, 0, 180, 0, 1, 1, 1)
//const box6 = spawnBoxX(43.4, 0.5, 37.6, 0, 0, 0, 0.3, 0.01, 0.3)

//const woman_GoldDress_3yYNfROogq0_2 = spawnGltfX(woman_GoldDressShape_3yYNfROogq0, 45.1, 0, 48.4, 0, 0, 0, 1, 1, 1)
//const box7 = spawnBoxX(45.1, 0, 48.4, 0, 0, 0, 0.3, 0.01, 0.3)


//////////////////////////////////////////
// Dynamic Behavior

let clipFly = sparrow.get(GLTFShape).getClip("fly")
// but let the BirdFlightSystem start and top it.



//////////////////////////////////////////
// Animation systems
class BirdFlightSystem implements ISystem {
  // init code
  flyingState = false

  //!CF todo make this an array of trees.  Set them by the actual tree positions.
  locIndexBegin = 0
  locIndexEnd = 1
  idleTime = 9.0 //sec
  currentIdleTime = 0.0
  flyTime = 5.0  //sec
  currentFlightTime = 0.0

  //v1 = this.tree1Site
  //v2 = this.tree2Site
  dx = 0.0
  dy = 0.0
  dz = 0.0

 

update(dt: number) {
  if (this.flyingState == false) {
    // Bird waits, hidden
    if (this.currentIdleTime <= 0) {
      log('start flying 1')
      // set up the next flight
      log("locIndexBegin, locIndexEnd", this.locIndexBegin, this.locIndexEnd)
      let locBegin = locations[this.locIndexBegin]
      let locEnd = locations[this.locIndexEnd]
      // calculate the increments of flight distance per frame
      this.dx = (locEnd.x - locBegin.x) * (dt / this.flyTime) // use the dt of this frame as typical.  probably about 1/30 sec or about 0.033 sec
      this.dy = (locEnd.y - locBegin.y) * (dt / this.flyTime)
      this.dz = (locEnd.z - locBegin.z) * (dt / this.flyTime)

      this.currentFlightTime = this.flyTime
      
      // Move the bird to start point, in case it isn't currently there (e.g. fron its original instantiation)
      let birdPos = sparrow.get(Transform).position
      birdPos.x = locBegin.x //!CF todo: could this be a Vector3 assigment to birdPos? as in:   sparrow.get(Transform).position = locBegin
      birdPos.y = locBegin.y
      birdPos.z = locBegin.z

      // Aim the bird in the right direction
      //!CF todo

      // Make the bird visible
      engine.addEntity(sparrow)

      // Start the animation
      clipFly.play()

      this.flyingState = true
      //log('start flying 2')

      // set up the next route
      this.locIndexBegin = this.locIndexEnd // new starting location will be the endpoint of this flight
      this.locIndexEnd = getNextLoc(this.locIndexBegin) // get destination for next leg of flight, but make it not the current end point

    }
    else {
      this.currentIdleTime -= dt
    }
  }
  else
  {
  //fly
  if (this.currentFlightTime <=0){
      // stop the animation
      clipFly.pause()
      // Make the bird invisible
      engine.removeEntity(sparrow)
      // end the flying state
      this.flyingState = false
      this.currentIdleTime = this.idleTime
      //log("stop flying")
    }
    else {
      this.currentFlightTime -= dt
      // move the bird by dx, dy, dz
      sparrow.get(Transform).position.x += this.dx
      sparrow.get(Transform).position.y += this.dy
      sparrow.get(Transform).position.z += this.dz
    }
  }
}
}

// Add a new instance of the system to the engine
engine.addSystem(new BirdFlightSystem())


/*
// Create AudioClip object, holding audio file
const clip = new AudioClip("sounds/Animals/Birds/431372__pdc4tune__backyard-birds.mp3")

// Create AudioSource component, referencing `clip`
const source = new AudioSource(clip)

// Add AudioSource component to entity
sparrow.add(source)

// Play sound
source.playing = true
*/

//log("finis1")
//!CF todo: the execute task call seems not to return, so anything AFTER it won't work


executeTask(async () => {
  try {
    await playSound("sounds/Animals/Birds/431372__pdc4tune__backyard-birds.mp3", {
      loop: true,
      volume: 25
    })
  } catch {
    log("failed to play sound")
  }
})
