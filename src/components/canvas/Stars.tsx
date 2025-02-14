import { useState, useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'

interface StarsProps {}

const Stars = (props: StarsProps) => {
  const ref = useRef<THREE.Points>(null)
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.2 }))

  useEffect(() => {
    if (ref.current) {
      ;(ref.current.geometry as THREE.BufferGeometry).computeBoundingSphere()
    }
  }, [sphere])

  useFrame((state: any, delta: number) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#f272c8" size={0.003} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-[-1] bg-primary">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas
