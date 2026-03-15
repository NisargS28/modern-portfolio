'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField({ isDark }: { isDark: boolean }) {
  const ref = useRef<any>(null);
  
  // Memoize the array to prevent recreation on every frame/render
  const sphere = useMemo(() => {
    // Array length must be a multiple of 3 (x, y, z) to prevent Three.js out-of-bounds NaN errors
    const points = new Float32Array(5001);
    random.inSphere(points, { radius: 1.5 });
    // Filter out any NaN values just to be absolutely safe
    for (let i = 0; i < points.length; i++) {
        if (isNaN(points[i])) points[i] = 0;
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isDark ? '#60A5FA' : '#2563EB'}
          size={isDark ? 0.005 : 0.0065}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={isDark ? 0.35 : 0.65}
        />
      </Points>
    </group>
  );
}

export default function ParticleBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsDark(root.classList.contains('dark'));

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${isDark ? 'opacity-60' : 'opacity-85'}`}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField isDark={isDark} />
      </Canvas>
    </div>
  );
}
