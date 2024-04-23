import { Canvas } from "@react-three/fiber"
import Earth from "../components/ThreeD/Earth";
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function Home()
{
  return (
    <>
      <main className="h-screen relative flex div-center">
        <div className="z-10 p-10 overflow-hidden group cursor-pointer">
          <h1 className="text-[1vw] absolute font-bold tracking-[2vw] leading-[4vw] uppercase opacity-0 group-hover:opacity-100 duration-300 translate-y-full group-hover:translate-y-0">EXPLORE</h1>
          <h1 className="text-[1vw] font-bold tracking-[2vw] leading-[4vw] uppercase group-hover:opacity-0 duration-300 translate-y-0 group-hover:-translate-y-full">Astroterra</h1>
        </div>
        <div className="absolute w-full h-full top-0 left-0">
          <Canvas className="" camera={{fov:40}}>
              <Earth />
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