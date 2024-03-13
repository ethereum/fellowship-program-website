'use client';

// Documentation
// https://vasturiano.github.io/three-globe/
// https://threejs.org/docs/index.html#api/en/


// components/GlobeComponent.js
import { useEffect, useRef } from 'react';
import ThreeGlobe from 'three-globe';
import { AmbientLight, BoxGeometry, Mesh, MeshBasicMaterial, MeshLambertMaterial, SphereGeometry, WebGLRenderer, Scene, PerspectiveCamera, OrthographicCamera } from 'three';
import { useState } from 'react'

const locations = [
  { lat: 64.1466, long: -21.9426, size: 10, color: "red" }, // Reykjavik, Iceland
  { lat: -33.9249, long: 18.4241, size: 10,color: "green" }, // Cape Town, South Africa
  { lat: -54.8019, long: -68.3030, size: 10,color: "blue" }, // Ushuaia, Argentina
  { lat: 35.0116, long: 135.7681, size: 10,color: "yellow" }, // Kyoto, Japan
  { lat: 44.4280, long: -110.5885, size: 10,color: "orange" } // Yellowstone National Park, USA
];

const Globe = () => {
  const globeContainerRef = useRef(null);
  const globeRef = useRef(null);
  const width = 500;
  const height = 500;

  const [location, setLocation] = useState(locations[0]);

//   setInterval(() => {
//     const randomLocation = locations[Math.floor(Math.random() * locations.length)];
//     setLocation(randomLocation);
//   }
//   , 10000);

  // Convert latitude and longitude to a position on the globe
  function latLongToVector3(lat, lng, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return { x, y, z };
  }

  useEffect(() => {
    // Only initialize the globe, scene, camera, and renderer once
    if (!globeRef.current) {
      // Creating Three scene object
      // https://threejs.org/docs/#api/en/scenes/Scene
      const scene = new Scene();

      const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
      // const camera = new OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 )

      // Setup renderer, which renders the scene
      // Here we set the width and height
      // https://threejs.org/docs/#api/en/renderers/WebGLRenderer
      const renderer = new WebGLRenderer();
      renderer.setClearColor(0x000000, 0)
      renderer.setSize(width, height);

      globeContainerRef.current.appendChild(renderer.domElement);

      const globe = new ThreeGlobe({alpha: true, animateIn: false})
      .globeImageUrl("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4013c234-b843-4331-84cd-8a86d940d26f/dcrbmun-38493001-d0cc-4bd6-9acb-2bf1109b488b.jpg")
      .customLayerData(locations)
      globeRef.current = globe; // Store the globe object in the ref

      scene.add(new AmbientLight(0xffffff, 3));
      scene.add(globe);
      
    //   locations.forEach(location => {
    //       // // Add a 3D object (e.g., a cube) to the globe
    //       // const geometry = new BoxGeometry(10, 10, 10); // Create a cube geometry
    //       // const material = new MeshBasicMaterial({ color: 0xff0000 }); // Create a material
    //       // const cube = new Mesh(geometry, material); // Create a mesh from the geometry and material

    //       // const altitude = 1; // Altitude above the globe's surface
    //       // const { x, y, z } = latLongToVector3(location.lat, location.long, globe.getGlobeRadius() + altitude);
    //       // cube.position.set(x, y, z);
    //       // cube.lookAt(globe.position); // Make the cube face the globe's center

    //       // scene.add(cube);

    //       const geometry = new SphereGeometry(10); // Create a sphere geometry
    //       const material = new MeshLambertMaterial({ color: location.color })
    //       const sphere = new Mesh(geometry, material); // Create a mesh from the geometry and material

    //       const altitude = 6; // Altitude above the globe's surface
    //       const { x, y, z } = latLongToVector3(location.lat, location.long, globe.getGlobeRadius() + altitude);
    //       sphere.position.set(x, y, z);
    //       scene.add(sphere)
    //     }
    //   );

      camera.position.z = 200;
        console.log(globe)
        console.log(scene)
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    }
  }, []); // This effect runs once on mount

  useEffect(() => {
    // Define the rotation function inside this effect to ensure it has access to the current globe object
    const rotateGlobeToCoordinates = (globe, targetLat, targetLong) => {
      const latitudeRadians = (targetLat * Math.PI) / 180;
      const longitudeRadians = (targetLong * Math.PI) / 180;

      // Apply the calculated rotations to the globe
      globe.rotation.x = Math.PI / 2 - latitudeRadians;
      globe.rotation.y = -longitudeRadians;
    };

    // Check if the globe object is available and the location prop is valid
    if (globeRef.current && location && location.lat != null && location.long != null) {
      rotateGlobeToCoordinates(globeRef.current, location.lat, location.long);
    }
  }, [location]); 

  return <div ref={globeContainerRef} style={{ width: width, height: height }} />;
};

export default Globe;