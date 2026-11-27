"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function LusionCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setWebGLSupported(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6.0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setWebGLSupported(false);
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Dense Spider Web Topology
    const SPOKES_COUNT = 44; // Dense radial spokes
    const RINGS_COUNT = 38;  // Dense concentric rings
    const TOTAL_NODES = SPOKES_COUNT * RINGS_COUNT;
    const HUB_X = 0.15;
    const HUB_Y = -0.05;
    const MIN_RADIUS = 0.35;
    const MAX_RADIUS = 6.8;

    // Store base positions, current positions, velocities, radii and angles
    const basePositions = new Float32Array(TOTAL_NODES * 3);
    const currentPositions = new Float32Array(TOTAL_NODES * 3);
    const velocities = new Float32Array(TOTAL_NODES * 3);
    const nodeColors = new Float32Array(TOTAL_NODES * 3);
    const nodeRadii = new Float32Array(TOTAL_NODES);
    const nodeAngles = new Float32Array(TOTAL_NODES);

    let isLightMode = document.documentElement.classList.contains("light");

    // Colors
    const darkNodeColor = new THREE.Color(0xc5f36a);
    const darkNodeDim = new THREE.Color(0x3a4048);
    const lightNodeColor = new THREE.Color(0x101112);
    const lightNodeDim = new THREE.Color(0x8a8e94);

    // Initialize Web Nodes
    for (let ring = 0; ring < RINGS_COUNT; ring++) {
      const ringProgress = ring / (RINGS_COUNT - 1);
      const radius = MIN_RADIUS + (MAX_RADIUS - MIN_RADIUS) * Math.pow(ringProgress, 1.15);

      for (let spoke = 0; spoke < SPOKES_COUNT; spoke++) {
        const index = ring * SPOKES_COUNT + spoke;
        const baseAngle = (spoke / SPOKES_COUNT) * Math.PI * 2;
        
        // Natural organic irregularity in spider silk threads
        const angleJitter = Math.sin(ring * 2.5 + spoke * 1.8) * 0.025;
        const angle = baseAngle + angleJitter;
        const radiusJitter = (Math.sin(spoke * 4.2) * 0.03 + Math.cos(ring * 3.1) * 0.02) * radius;
        const r = radius + radiusJitter;

        const x = HUB_X + Math.cos(angle) * r;
        const y = HUB_Y + Math.sin(angle) * r;
        const z = -Math.pow(1.0 - ringProgress, 1.8) * 0.45;

        const i3 = index * 3;
        basePositions[i3] = x;
        basePositions[i3 + 1] = y;
        basePositions[i3 + 2] = z;

        currentPositions[i3] = x;
        currentPositions[i3 + 1] = y;
        currentPositions[i3 + 2] = z;

        velocities[i3] = 0;
        velocities[i3 + 1] = 0;
        velocities[i3 + 2] = 0;

        nodeRadii[index] = r;
        nodeAngles[index] = angle;

        const c = isLightMode
          ? (ring % 3 === 0 ? lightNodeColor : lightNodeDim)
          : (ring % 3 === 0 ? darkNodeColor : darkNodeDim);
        nodeColors[i3] = c.r;
        nodeColors[i3 + 1] = c.g;
        nodeColors[i3 + 2] = c.b;
      }
    }

    // 3. Build Web Lines (Radial Spokes + Concentric Ring Chords + Auxiliary Cross Threads)
    const lineIndices: number[] = [];

    // A. Radial spoke connections
    for (let spoke = 0; spoke < SPOKES_COUNT; spoke++) {
      for (let ring = 0; ring < RINGS_COUNT - 1; ring++) {
        const i1 = ring * SPOKES_COUNT + spoke;
        const i2 = (ring + 1) * SPOKES_COUNT + spoke;
        lineIndices.push(i1, i2);
      }
    }

    // B. Concentric ring chords
    for (let ring = 0; ring < RINGS_COUNT; ring++) {
      for (let spoke = 0; spoke < SPOKES_COUNT; spoke++) {
        const nextSpoke = (spoke + 1) % SPOKES_COUNT;
        const i1 = ring * SPOKES_COUNT + spoke;
        const i2 = ring * SPOKES_COUNT + nextSpoke;
        lineIndices.push(i1, i2);
      }
    }

    // C. Auxiliary diagonal cross-fibers (dense structural web mesh)
    for (let ring = 1; ring < RINGS_COUNT - 1; ring += 2) {
      for (let spoke = 0; spoke < SPOKES_COUNT; spoke++) {
        const nextSpoke = (spoke + 1) % SPOKES_COUNT;
        const i1 = ring * SPOKES_COUNT + spoke;
        const i2 = (ring + 1) * SPOKES_COUNT + nextSpoke;
        lineIndices.push(i1, i2);
      }
    }

    // 4. Three.js Geometries & Materials
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));
    lineGeo.setIndex(lineIndices);

    const lineMat = new THREE.LineBasicMaterial({
      color: isLightMode ? 0x2b2e34 : 0x767d88,
      transparent: true,
      opacity: isLightMode ? 0.38 : 0.42,
      blending: THREE.NormalBlending,
      linewidth: 1,
    });
    const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineMesh);

    // Nodes (Dew Droplets / Joint Beads)
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(currentPositions, 3));
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: isLightMode ? 0.038 : 0.046,
      vertexColors: true,
      transparent: true,
      opacity: isLightMode ? 0.6 : 0.85,
      blending: THREE.NormalBlending,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    scene.add(pointsMesh);

    // 5. Celestial Planet / Heavy Gravitational Focal Orb
    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    const planetCoreGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const planetCoreMat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x101112 : 0xc5f36a,
      transparent: true,
      opacity: isLightMode ? 0.85 : 0.95,
    });
    const planetCore = new THREE.Mesh(planetCoreGeo, planetCoreMat);
    planetGroup.add(planetCore);

    const ringGeo = new THREE.RingGeometry(0.24, 0.27, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x30343a : 0xc5f36a,
      transparent: true,
      opacity: isLightMode ? 0.4 : 0.6,
      side: THREE.DoubleSide,
    });
    const horizonRing = new THREE.Mesh(ringGeo, ringMat);
    planetGroup.add(horizonRing);

    // Floating micro cosmic dust
    const dustCount = 120;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 12;
      dustPos[i + 1] = (Math.random() - 0.5) * 10;
      dustPos[i + 2] = (Math.random() - 0.5) * 4;
    }
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: isLightMode ? 0x101112 : 0xc5f36a,
      size: 0.02,
      transparent: true,
      opacity: 0.3,
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    // 6. Theme Switching Handler
    const updateThemeMaterials = (theme: "dark" | "light") => {
      const isLight = theme === "light";
      lineMat.color.setHex(isLight ? 0x2b2e34 : 0x767d88);
      lineMat.opacity = isLight ? 0.38 : 0.42;

      planetCoreMat.color.setHex(isLight ? 0x101112 : 0xc5f36a);
      ringMat.color.setHex(isLight ? 0x30343a : 0xc5f36a);
      dustMat.color.setHex(isLight ? 0x101112 : 0xc5f36a);

      const colorAttr = pointsGeo.attributes.color as THREE.BufferAttribute;
      for (let ring = 0; ring < RINGS_COUNT; ring++) {
        for (let spoke = 0; spoke < SPOKES_COUNT; spoke++) {
          const index = ring * SPOKES_COUNT + spoke;
          const c = isLight
            ? (ring % 3 === 0 ? lightNodeColor : lightNodeDim)
            : (ring % 3 === 0 ? darkNodeColor : darkNodeDim);
          colorAttr.setXYZ(index, c.r, c.g, c.b);
        }
      }
      colorAttr.needsUpdate = true;
    };

    const handleThemeEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: "dark" | "light" }>;
      if (customEvent.detail?.theme) {
        updateThemeMaterials(customEvent.detail.theme);
      }
    };
    window.addEventListener("sws_theme_change", handleThemeEvent);

    // 7. Mouse & Gravitational Physics Engine
    const mouseNdc = new THREE.Vector2(0, 0);
    const targetMouseNdc = new THREE.Vector2(0, 0);
    const planetPos = new THREE.Vector3(0, 0, -0.8);
    const targetPlanetPos = new THREE.Vector3(0, 0, -0.8);
    let userInteracted = false;
    let lastMouseMoveTime = 0;

    const raycaster = new THREE.Raycaster();
    const planeZ0 = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const planeIntersectPoint = new THREE.Vector3();

    const handleMouseMove = (e: MouseEvent) => {
      userInteracted = true;
      lastMouseMoveTime = performance.now();
      targetMouseNdc.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseNdc.y = -(e.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(targetMouseNdc, camera);
      raycaster.ray.intersectPlane(planeZ0, planeIntersectPoint);
      if (planeIntersectPoint) {
        targetPlanetPos.x = planeIntersectPoint.x;
        targetPlanetPos.y = planeIntersectPoint.y;
        targetPlanetPos.z = -0.95;
      }
    };

    const handleMouseLeave = () => {
      userInteracted = false;
    };

    // Scroll Tracking
    let scrollProgress = 0;
    let targetScrollProgress = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      targetScrollProgress = scrollY / maxScroll;
    };

    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();

    // 8. Animation & Continuous Organic Motion Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const GRAVITY_RADIUS = 3.0;   // Range of gravitational well around planet
    const GRAVITY_DEPTH = 2.15;   // Maximum spacetime sag depth (Z depression)
    const LATERAL_PULL = 0.44;    // Inward lateral tension pull towards planet center
    const SPRING_K = 0.14;        // Elastic web tension spring stiffness
    const DAMPING = 0.84;         // Viscous air & silk thread damping

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const now = performance.now();

      // Check if mouse is idle (no motion for > 1.2s or user hasn't touched mouse)
      const isMouseIdle = !userInteracted || (now - lastMouseMoveTime > 1200);

      if (isMouseIdle) {
        // Continuous organic autonomous wander of the celestial planet across the web!
        // Creates a wandering gravitational indentation and ripple wake even when mouse is not moving
        const orbitX = HUB_X + Math.cos(elapsedTime * 0.75) * 1.6 + Math.sin(elapsedTime * 1.3) * 0.5;
        const orbitY = HUB_Y + Math.sin(elapsedTime * 0.65) * 1.3 + Math.cos(elapsedTime * 1.5) * 0.4;
        targetPlanetPos.x += (orbitX - targetPlanetPos.x) * 0.05;
        targetPlanetPos.y += (orbitY - targetPlanetPos.y) * 0.05;
        targetPlanetPos.z = -0.95;

        targetMouseNdc.x = (targetPlanetPos.x / 4.0);
        targetMouseNdc.y = (targetPlanetPos.y / 3.0);
      }

      // Smooth scroll lerp
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.08;

      // Smooth mouse / planet position lerp
      mouseNdc.x += (targetMouseNdc.x - mouseNdc.x) * 0.08;
      mouseNdc.y += (targetMouseNdc.y - mouseNdc.y) * 0.08;

      planetPos.x += (targetPlanetPos.x - planetPos.x) * 0.10;
      planetPos.y += (targetPlanetPos.y - planetPos.y) * 0.10;
      planetPos.z += (targetPlanetPos.z - planetPos.z) * 0.10;

      // Update celestial planet position & orbital ring wobble
      planetGroup.position.copy(planetPos);
      horizonRing.rotation.z = elapsedTime * 1.5;
      horizonRing.rotation.x = Math.sin(elapsedTime * 2.0) * 0.25;

      // Dynamic camera panoramic tilt
      camera.position.x = mouseNdc.x * 0.35;
      camera.position.y = mouseNdc.y * 0.25 - scrollProgress * 1.8;
      camera.lookAt(0, -scrollProgress * 1.5, 0);

      // Compute Continuous Wave Motion & Spacetime Physics on All Web Nodes
      const posAttr = lineGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < TOTAL_NODES; i++) {
        const i3 = i * 3;
        const r = nodeRadii[i];
        const theta = nodeAngles[i];

        // 🌊 CONTINUOUS MULTI-HARMONIC SILK MOTION (ALWAYS IN MOTION)
        // 1. Traveling radial ripple from hub outward
        const radialWave = Math.sin(elapsedTime * 2.5 - r * 2.2) * 0.22;
        // 2. Angular twisting shear wave
        const angularWave = Math.cos(elapsedTime * 1.8 + theta * 3.0) * 0.16;
        // 3. High-frequency silk tremor
        const tremor = Math.sin(elapsedTime * 5.2 + r * 3.6 + theta * 2.0) * 0.045;
        // 4. Lateral sway (X and Y breathing)
        const lateralSwayX = Math.sin(elapsedTime * 1.5 + r * 1.3) * 0.075 * (r / MAX_RADIUS);
        const lateralSwayY = Math.cos(elapsedTime * 1.3 + theta * 2.0) * 0.075 * (r / MAX_RADIUS);

        const totalWaveZ = radialWave + angularWave + tremor;

        // Base with continuous undulating waves applied
        const bx = basePositions[i3] + lateralSwayX;
        const by = basePositions[i3 + 1] + lateralSwayY;
        const bz = basePositions[i3 + 2] + totalWaveZ;

        let curX = posArray[i3];
        let curY = posArray[i3 + 1];
        let curZ = posArray[i3 + 2];

        let vx = velocities[i3];
        let vy = velocities[i3 + 1];
        let vz = velocities[i3 + 2];

        // Vector from node to heavy planet
        const dx = planetPos.x - curX;
        const dy = planetPos.y - curY;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        let targetX = bx;
        let targetY = by;
        let targetZ = bz;

        // Gravitational Depression (Space Bend with Planet)
        if (dist < GRAVITY_RADIUS && planetPos.z < 2.0) {
          const normDist = dist / GRAVITY_RADIUS;
          const well = Math.exp(-normDist * normDist * 3.2);

          // Z-depth funnel sag
          targetZ = bz - well * GRAVITY_DEPTH;

          // Inward lateral tension
          const pullFactor = well * LATERAL_PULL;
          targetX = bx + dx * pullFactor;
          targetY = by + dy * pullFactor;
        }

        // Spring acceleration
        const ax = (targetX - curX) * SPRING_K;
        const ay = (targetY - curY) * SPRING_K;
        const az = (targetZ - curZ) * SPRING_K;

        // Velocity integration
        vx = (vx + ax) * DAMPING;
        vy = (vy + ay) * DAMPING;
        vz = (vz + az) * DAMPING;

        curX += vx;
        curY += vy;
        curZ += vz;

        posArray[i3] = curX;
        posArray[i3 + 1] = curY;
        posArray[i3 + 2] = curZ;

        velocities[i3] = vx;
        velocities[i3 + 1] = vy;
        velocities[i3 + 2] = vz;
      }

      posAttr.needsUpdate = true;
      (pointsGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      dustPoints.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("sws_theme_change", handleThemeEvent);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      lineGeo.dispose();
      lineMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      planetCoreGeo.dispose();
      planetCoreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing pointer-events-auto"
        aria-hidden="true"
      />
      {!webGLSupported && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[460px] h-[460px] rounded-none bg-gradient-to-tr from-[#191B1D] via-[#282C30] to-[#101112] border border-white/10 blur-[80px] opacity-60" />
        </div>
      )}
      {/* Dynamic ambient radial vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(16,17,18,0.55)_75%,rgba(16,17,18,0.92)_100%)] dark:block hidden" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(247,248,249,0.4)_75%,rgba(247,248,249,0.88)_100%)] dark:hidden block" />
    </div>
  );
}
