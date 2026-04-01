<script>
  import { T, useTask } from '@threlte/core';
  import { OrbitControls, useTexture, ContactShadows, Float } from '@threlte/extras';
  import * as THREE from 'three';

  export let isInteracting = false;

  // ─── State ───────────────────────────────────────────────────
  let rotationY = 0;

  // ─── Textures ──────────────────────────────────────────────────
  const texture = useTexture('/images/bab-boujloud.png', {
    transform: (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
      return t;
    }
  });

  // ─── Shape Logic ──────────────────────────────────────────────
  const createGateShape = () => {
    const shape = new THREE.Shape();
    const w = 6;
    const h = 5.5;
    const towerW = 1.3;
    const towerH = 5.8;
    
    // Silhouette
    shape.moveTo(-w/2, 0);
    shape.lineTo(w/2, 0);
    shape.lineTo(w/2, towerH);
    shape.lineTo(w/2 - towerW, towerH);
    shape.lineTo(w/2 - towerW, h);
    shape.lineTo(-(w/2 - towerW), h);
    shape.lineTo(-(w/2 - towerW), towerH);
    shape.lineTo(-w/2, towerH);
    shape.lineTo(-w/2, 0);

    // Horseshoe Arch Hole
    const hole = new THREE.Path();
    const archW = w - (towerW * 2);
    const ahw = archW / 2;
    const baseH = 2.4; // slightly higher
    const r = ahw * 1.1; 
    
    hole.moveTo(ahw, 0);
    hole.lineTo(ahw, baseH);
    hole.absarc(0, baseH + 0.1, r, -0.3, Math.PI + 0.3, false); 
    hole.lineTo(-ahw, baseH);
    hole.lineTo(-ahw, 0);
    hole.lineTo(ahw, 0);
    
    shape.holes.push(hole);
    return shape;
  };

  const gateShape = createGateShape();
  const extrudeSettings = {
    depth: 0.8,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    curveSegments: 36
  };

  // ─── Animation Loop ────────────────────────────────────────────
  useTask((delta) => {
    if (!isInteracting) {
      rotationY += delta * 0.2;
    }
  });
</script>

<!-- Camera & Controls -->
<T.PerspectiveCamera makeDefault position={[0, 4, 13]} fov={35}>
  <OrbitControls
    enableZoom={false}
    enablePan={false}
    minPolarAngle={Math.PI / 2.5}
    maxPolarAngle={Math.PI / 2}
    on:start={() => (isInteracting = true)}
    on:end={() => (isInteracting = false)}
  />
</T.PerspectiveCamera>

<!-- Lighting -->
<T.AmbientLight intensity={2} color="#fff1e0" />
<T.DirectionalLight position={[5, 10, 5]} intensity={3} castShadow />
<T.PointLight position={[-4, 5, 4]} intensity={2.5} color="#c0b283" />

<Float speed={1.2} rotationIntensity={0.1}>
  <T.Group rotation.y={rotationY}>
    <!-- The Gate Mesh: Using T Components for automatic disposal/reactivity -->
    <T.Mesh castShadow receiveShadow>
      <T.ExtrudeGeometry args={[gateShape, extrudeSettings]} />
      
      {#if $texture}
        <T.MeshStandardMaterial 
          map={$texture} 
          roughness={0.6} 
          metalness={0.1} 
        />
      {:else}
        <T.MeshStandardMaterial 
          color="#ffffff" 
          roughness={0.8} 
        />
      {/if}
    </T.Mesh>
  </T.Group>
</Float>

<!-- ABSOLUTE DEBUG SPHERE (Red, Unlit) -->
<T.Mesh position={[0, 2, 0]}>
  <T.SphereGeometry args={[0.5]} />
  <T.MeshBasicMaterial color="red" />
</T.Mesh>

<!-- GROUND SHADOWS -->
<ContactShadows
  position={[0, -0.01, 0]}
  scale={15}
  blur={2.5}
  far={4}
  opacity={0.5}
/>

<style>
  /* Local styles if needed */
</style>
