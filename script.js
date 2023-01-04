var createScene = function () {
  // This creates a basic Babylon Scene object (non-mesh)
  var scene = new BABYLON.Scene(engine);

  // Parameters: name, alpha, beta, radius, target position, scene
  const camera = new BABYLON.ArcRotateCamera(
    "Camera",
    0,
    0,
    10,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );

  // Positions the camera overwriting alpha, beta, radius
  camera.setPosition(new BABYLON.Vector3(0, 0, 20));

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

   const floor = new BABYLON.MeshBuilder.CreatePlane(
     "plane",
     {
       size: 50,
     },
     scene
   );

   floor.position = new BABYLON.Vector3(0, -3, 0);

   floor.rotate(BABYLON.Vector3.Right(), Math.PI / 2);

  // 1 circle
 

  //outside of bookshelf

  const bed = buildBed(scene);
  const chair = buildChair(scene);
  const table = buildTable(scene);
  const shelf = buildShelf(scene);
  // bed.pos

  return scene;
};
const buildShelf = (scene) => { 
 const bottomSide = new BABYLON.MeshBuilder.CreateBox(
   "box",
   {
     height: 0.5,
     width: 10,
     depth: 3,
   },
   scene
 );

 bottomSide.position = new BABYLON.Vector3(-2.5, -2.75, 5);

 const topSide = new BABYLON.MeshBuilder.CreateBox(
   "box",
   {
     height: 0.5,
     width: 10,
     depth: 3,
   },
   scene
 );

 topSide.position = new BABYLON.Vector3(-2.5, 7.25, 5);

 const backSide = new BABYLON.MeshBuilder.CreateBox(
   "box",
   {
     height: 10.5,
     width: 10,
     depth: 0.5,
   },
   scene
 );

 backSide.position = new BABYLON.Vector3(-2.5, 2.25, 6.75);

 const side1 = new BABYLON.MeshBuilder.CreateBox(
   "box",
   {
     height: 10,
     width: 0.5,
     depth: 3,
   },
   scene
 );

 side1.position = new BABYLON.Vector3(-7.25, 2.25, 5);

 const side2 = new BABYLON.MeshBuilder.CreateBox(
   "box",
   {
     height: 10,
     width: 0.5,
     depth: 3,
   },
   scene
 );

 side2.position = new BABYLON.Vector3(2.25, 2.25, 5); //9.5/2=4.75 2.25-4.75=-2.5

 const side3 = new BABYLON.MeshBuilder.CreateBox(
   "box",
   {
     height: 10,
     width: 0.5,
     depth: 3,
   },
   scene
 );

 side3.position = new BABYLON.Vector3(-2.5, 2.25, 5);

 const side4 = new BABYLON.MeshBuilder.CreateBox(
   "box",
   {
     height: 0.5,
     width: 10,
     depth: 3,
   },
   scene
 );

 side4.position = new BABYLON.Vector3(-2.5, 2.5, 5);

 const side5 = new BABYLON.MeshBuilder.CreateBox(
   "box",
   {
     height: 0.5,
     width: 10,
     depth: 3,
   },
   scene
 );

 side5.position = new BABYLON.Vector3(-2.5, 4.875, 5); //(7.25+2.5)/2=9.75/2=

 const side6 = new BABYLON.MeshBuilder.CreateBox(
   "box",
   {
     height: 0.5,
     width: 10,
     depth: 3,
   },
   scene
 );

 side6.position = new BABYLON.Vector3(-2.5, -0.125, 5); //-2.75+2.5/2
  
  const shelf = BABYLON.Mesh.MergeMeshes([bottomSide, topSide, backSide, side1, side2, side3, side4, side5, side6]);
  return shelf;
}
const buildTable = (scene) => { 
   const sphere = new BABYLON.MeshBuilder.CreateSphere(
     "sphere",
     {
       diameter: 4,
       diameterY: 0.5,
     },
     scene
   );

   sphere.position = new BABYLON.Vector3(-5, 0, 0);

   // four prisms

   const leg5 = new BABYLON.MeshBuilder.CreateBox(
     "box",
     {
       height: 3,
       width: 0.2,
       depth: 0.2,
     },
     scene
   );

   leg5.position = new BABYLON.Vector3(-3.1, -1.5, 0);

   const leg6 = new BABYLON.MeshBuilder.CreateBox(
     "box",
     {
       height: 3,
       width: 0.2,
       depth: 0.2,
     },
     scene
   );

   leg6.position = new BABYLON.Vector3(-6.9, -1.5, 0);

   const leg7 = new BABYLON.MeshBuilder.CreateBox(
     "box",
     {
       height: 3,
       width: 0.2,
       depth: 0.2,
     },
     scene
   );

   leg7.position = new BABYLON.Vector3(-5, -1.5, 1.9);

   const leg8 = new BABYLON.MeshBuilder.CreateBox(
     "box",
     {
       height: 3,
       width: 0.2,
       depth: 0.2,
     },
     scene
   );

  leg8.position = new BABYLON.Vector3(-5, -1.5, -1.9);
  
  const table = BABYLON.Mesh.MergeMeshes([sphere, leg5, leg6, leg7, leg8]);

  return table;
}
const buildChair = (scene) => { 
  const box = BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 0.1,
      width: 3,
      depth: 3,
    },
    scene
  );

  const seat = BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 3,
      width: 0.1,
      depth: 3,
    },
    scene
  );

  seat.position = new BABYLON.Vector3(1.5, 1.5, 0);

  const leg1 = BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 3,
      width: 0.1,
      depth: 0.1,
    },
    scene
  );

  leg1.position = new BABYLON.Vector3(-1.4, -1.5, -1.4);

  const leg2 = BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 3,
      width: 0.1,
      depth: 0.1,
    },
    scene
  );

  leg2.position = new BABYLON.Vector3(1.4, -1.5, 1.4);

  const leg3 = BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 3,
      width: 0.1,
      depth: 0.1,
    },
    scene
  );

  leg3.position = new BABYLON.Vector3(1.4, -1.5, -1.4);

  const leg4 = BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 3,
      width: 0.1,
      depth: 0.1,
    },
    scene
  );

  leg4.position = new BABYLON.Vector3(-1.4, -1.5, 1.4);

   const chair = BABYLON.Mesh.MergeMeshes([seat,box,leg1,leg2,leg3,leg4]);

  return chair;
}
const buildBed = (scene) => {
  const bedLeg1 = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 1,
      width: 0.25,
      depth: 0.25,
    },
    scene
  );

  bedLeg1.position = new BABYLON.Vector3(0, -2.5, -7);

  const bedLeg2 = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 1,
      width: 0.25,
      depth: 0.25,
    },
    scene
  );

  bedLeg2.position = new BABYLON.Vector3(0, -2.5, -15);

  const bedLeg3 = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 1,
      width: 0.25,
      depth: 0.25,
    },
    scene
  );

  bedLeg3.position = new BABYLON.Vector3(-15, -2.5, -15);

  const bedLeg4 = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 1,
      width: 0.25,
      depth: 0.25,
    },
    scene
  );

  bedLeg4.position = new BABYLON.Vector3(-15, -2.5, -7);

  const bedSide1 = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 1,
      width: 16,
      depth: 0.5,
    },
    scene
  );

  bedSide1.position = new BABYLON.Vector3(-7.5, -1.5, -6.5);

  const bedSide2 = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 1,
      width: 16,
      depth: 0.5,
    },
    scene
  );

  bedSide2.position = new BABYLON.Vector3(-7.5, -1.5, -15.5);

  const bedSide3 = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 1,
      width: 0.5,
      depth: 9.5,
    },
    scene
  );

  bedSide3.position = new BABYLON.Vector3(-15.5, -1.5, -11);

  const bedSide4 = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 1,
      width: 0.5,
      depth: 9.5,
    },
    scene
  );

  bedSide4.position = new BABYLON.Vector3(0.5, -1.5, -11);

  const mattress = new BABYLON.MeshBuilder.CreateBox(
    "box",
    {
      height: 1.25,
      width: 15.5,
      depth: 8.5,
    },
    scene
  );

  mattress.position = new BABYLON.Vector3(-7.5, -1.5, -11);

  const bed = BABYLON.Mesh.MergeMeshes([bedLeg1, bedLeg2, bedLeg3, bedLeg4, bedSide1, bedSide2, bedSide3, bedSide4, mattress]);

  return bed;
}