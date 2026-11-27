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

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5.8;

    // Renderer
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

    // Vertex Shader: Precision 3D Simplex noise for futuristic architectural morphing
    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMorphIntensity;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;
      varying float vDisplacement;

      // Efficient 3D Noise Implementation
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

      float snoise(vec3 v){
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
        i = mod(i, 289.0 );
        vec4 p = permute( permute( permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
      }

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        // Fluid architectural sculpture displacement
        vec3 coords = normal * 1.6;
        float noise = snoise(coords + vec3(uTime * 0.28));
        noise += 0.45 * snoise(coords * 2.2 - vec3(uTime * 0.32));
        
        // Dynamic mouse wave interaction
        float mouseDist = length(uv - (uMouse * 0.5 + 0.5));
        float mouseRipple = sin(mouseDist * 14.0 - uTime * 3.5) * 0.07 * exp(-mouseDist * 3.2);
        
        float displacement = (noise * 0.42 + mouseRipple) * uMorphIntensity;
        vDisplacement = displacement;
        
        vec3 newPosition = position + normal * displacement;
        vPosition = newPosition;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    // Fragment Shader: High-End Obsidian Chrome with Champagne Sheen and Electric-Lime Accents
    const fragmentShader = `
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;
      varying float vDisplacement;

      void main() {
        // View angle and Fresnel rim illumination
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = 1.0 - max(0.0, dot(viewDir, vNormal));
        fresnel = pow(fresnel, 2.8);

        // Core Architectural Palette: Deep Obsidian to Platinum Chrome
        vec3 colorObsidian = vec3(0.024, 0.027, 0.035);   // #060709
        vec3 colorCharcoal = vec3(0.078, 0.090, 0.122);   // #14171F
        vec3 colorPlatinum = vec3(0.88, 0.90, 0.94);      // Polished metal
        vec3 colorChampagne = vec3(0.90, 0.78, 0.53);     // #E6C687 luxury gold
        vec3 colorElectricLime = vec3(0.83, 1.0, 0.0);    // #D4FF00 signature accent

        // Spatial curvature blend
        float t = vDisplacement * 1.6 + sin(uTime * 0.4 + vPosition.y * 1.8) * 0.4;
        vec3 metallicBase = mix(colorCharcoal, colorPlatinum, smoothstep(-0.35, 0.45, t));

        // Subtle champagne & electric-lime metallic reflection highlights
        vec3 reflectiveSheen = mix(metallicBase, colorChampagne, smoothstep(0.15, 0.75, fresnel));
        reflectiveSheen = mix(reflectiveSheen, colorElectricLime, smoothstep(0.78, 0.98, fresnel) * 0.35);

        // Dual Key Light Specular Highlights
        vec3 keyLight1 = normalize(vec3(2.5, 4.5, 3.5));
        vec3 halfVector1 = normalize(keyLight1 + viewDir);
        float NdotH1 = max(0.0, dot(vNormal, halfVector1));
        float specular1 = pow(NdotH1, 72.0) * 1.6;

        vec3 keyLight2 = normalize(vec3(-3.0, -2.0, 2.0));
        vec3 halfVector2 = normalize(keyLight2 + viewDir);
        float NdotH2 = max(0.0, dot(vNormal, halfVector2));
        float specular2 = pow(NdotH2, 36.0) * 0.5;

        // Final Composite: Obsidian core + Metallic Reflection + Specular
        vec3 finalColor = mix(colorObsidian, reflectiveSheen, fresnel * 0.88 + 0.12);
        finalColor += vec3(specular1) * colorPlatinum;
        finalColor += vec3(specular2) * colorChampagne * 0.6;

        // Smooth falloff into deep obsidian background
        float alpha = smoothstep(0.0, 0.92, fresnel * 0.85 + 0.38);

        gl_FragColor = vec4(finalColor, alpha * 0.92);
      }
    `;

    // 3D Sculpture Geometry: High-Density Icosahedron
    const geometry = new THREE.IcosahedronGeometry(1.85, 64);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uMorphIntensity: { value: prefersReducedMotion ? 0.3 : 1.0 },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      side: THREE.DoubleSide,
    });

    const sculptureMesh = new THREE.Mesh(geometry, material);
    sculptureMesh.position.set(0, 0, 0);
    scene.add(sculptureMesh);

    // Floating Obsidian/Chrome dust particles
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 11;
      positions[i + 1] = (Math.random() - 0.5) * 8.5;
      positions[i + 2] = (Math.random() - 0.5) * 8.5;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xd4ff00,
      size: 0.022,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse Tracking with Inertial Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        sculptureMesh.rotation.y += deltaX * 0.005;
        sculptureMesh.rotation.x += deltaY * 0.005;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", handleResize);

    // Animation Render Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Update uniforms
      material.uniforms.uTime.value = elapsedTime;

      // Smooth mouse follow with spring interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      material.uniforms.uMouse.value.set(mouse.x, mouse.y);

      // Idle environmental rotation
      if (!isDragging && !prefersReducedMotion) {
        sculptureMesh.rotation.y = elapsedTime * 0.12 + mouse.x * 0.4;
        sculptureMesh.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 + mouse.y * 0.3;
      }

      particles.rotation.y = elapsedTime * 0.025;
      particles.rotation.x = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing pointer-events-auto"
        aria-hidden="true"
      />

      {/* Non-WebGL Fallback Mesh */}
      {!webGLSupported && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-charcoal via-metallic to-charcoal border border-white/10 blur-[80px] opacity-60 animate-pulse-glow" />
        </div>
      )}

      {/* Subtle obsidian cinematic vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,7,9,0.7)_80%,rgba(6,7,9,0.98)_100%)]" />
    </div>
  );
}
