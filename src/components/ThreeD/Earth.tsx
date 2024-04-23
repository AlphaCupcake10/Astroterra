import { useGLTF } from '@react-three/drei'

function Earth() {
    const gltf = useGLTF('Earth.glb');

    console.log(gltf)
    return (
        <primitive object={gltf.scene} />
    )
}

export default Earth