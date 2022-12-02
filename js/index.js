/*To actually be able to display anything with three.js,
 we need three things: scene, camera and renderer,
  so that we can render the scene with camera. */
                                            /*CREATE THE SCENE */
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    /* first attribute is field of view */
    75,
    /*Second attribute is the apect ratio provide image from bein squished*/
    window.innerWidth / window.innerHeight,
    /*The next two attributes are near and far clipping plane determine 
    how much of a scene is seen by the camera 's sight line */
    0.1,1000);

    /* add the renderer element to our HTML document.
     This is a <canvas> element the renderer uses to display the scene to us. */
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
     /*To create a cube, we need a BoxGeometry.
      This is an object that contains all the points (vertices) and fill (faces) of the cube. */
     const geometry = new THREE.BoxGeometry(1,1,1);

    /*In addition to the geometry, we need a material to color it.
    Three.js comes with several materials, but we'll stick to the MeshBasicMaterial for now.
    All materials take an object of properties which will be applied to them.
    To keep things very simple, we only supply a color attribute of 0x00ff00,
    which is green. This works the same way that colors work in CSS or Photoshop (hex colors). */

     const material = new THREE.MeshBasicMaterial(
        {color : 0x00ff00} );

    /*The third thing we need is a Mesh. A mesh is an object that takes a geometry,
     and applies a material to it, which we then can insert to our scene,
      and move freely around. */
    const cube = new THREE.Mesh(geometry,material );

    /*By default, when we call scene.add(), the thing we add will be added to the coordinates
     (0,0,0). This would cause both the camera and the cube to be inside each other. 
     To avoid this, we simply move the camera out a bit. */
    scene.add(cube);
    camera.position.z = 5 ;

    /*Rendering the Scene */

    /*This will create a loop that causes the renderer to draw the scene every time the screen is refreshed
     (on a typical screen this means 60 times per second). If you're new to writing games in the browser 
     requestAnimationFrame permit to pause when the user navigate to another browser tab ,
     not wasting preicious processing performances and batterie life */

                                                        /*RENDERING THE SCENE */

    function animate() {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene ,camera );
    }
    animate();


    /*Animate the Cube */



