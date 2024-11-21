import { Canvas } from '@react-three/fiber'
import "./style.css";
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const App = () => {

  return (
    <>

    <Canvas flat camera={{fov: 35}}>
      {/* <OrbitControls /> */}
      <ambientLight/>
      <Cyl/> 
      <EffectComposer>
      <Bloom 
        mipmapBlur
        intensity={8.0}
        luminanceThreshold={0}
        luminanceSmoothing={0}
        />
        {/* <ToneMapping adaptive/> */}
      </EffectComposer>
     


    </Canvas>
     <div className='w-full bg-black py-32'>
      <h1 className='text-white'>Welcome To SoftShala</h1>
     </div>
    </>
  )
}

export default App