import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function StarField({ count = 1000 }) {
  const ref = useRef();

  // Generate random spherical coordinates for high-performance buffer rendering
  const positions = useMemo(() => {
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.8 + Math.random() * 2.2; // radius between 1.8 and 4.0
      const theta = Math.random() * Math.PI * 2; // azimuthal angle
      const phi = Math.acos(2 * Math.random() - 1); // polar angle

      points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = radius * Math.cos(phi);
    }
    return points;
  }, [count]);

  // Animate slow rotation
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.03;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#84cc16" // Lime green theme color
        sizeAttenuation={true}
        depthWrite={false}
        transparent={true}
        opacity={0.5}
      />
    </points>
  );
}

function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-30 dark:opacity-50">
      <Canvas 
        camera={{ position: [0, 0, 3.5] }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <StarField count={700} />
      </Canvas>
    </div>
  );
}

export default HeroCanvas;
