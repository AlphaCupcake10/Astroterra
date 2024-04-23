import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import Earth from "../components/ThreeD/Earth";
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function Home()
{
  return (
    <>
      <main className="h-screen relative flex div-center">
        <div className="div-center pointer-events-none z-10">
          <h1 className="text-[1vw] font-bold tracking-[2vw] leading-[4vw] uppercase">Astroterra</h1>
        </div>
        <div className="absolute w-full h-full top-0 left-0">
          <Canvas className="" camera={{fov:30}}>
              <directionalLight color={"#7ea9ed"} intensity={5} position={[1,0,-2]} />
              <Earth />
              {/* <OrbitControls/> */}
              <EffectComposer>
                  <Bloom mipmapBlur intensity={1.2} />
              </EffectComposer>
          </Canvas>
        </div>
      </main>
    </>
  )
}

export default Home