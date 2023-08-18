import { Center, Text3D, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";
import { TextureLoader } from "three";
import { isMobile } from "react-device-detect";

const Hamper = ({ userName, speed }) => {
  const hamperRef = useRef();
  const controls = useRef();
  // var text3d = null;
  const matcapTexture = useLoader(TextureLoader, "./assets/images/00.jpeg");
  useFrame((state, delta) => {
    hamperRef.current.rotation.y += delta * speed;
  });

  // useEffect(() => {
  //   console.log("Hi, name is : ", userName);
  //   text3d = (
  //     <Center position={[0, -0.3, 0.43]} rotation-x={-Math.PI * 0.1}>
  //       <Text3D
  //         material={material}
  //         font="./assets/fonts/motley-forces-font/Motley_Forces_Regular.json"
  //         size={0.15}
  //         height={0.04}
  //         curveSegments={12}
  //         bevelEnabled={false}
  //         bevelThickness={0.02}
  //         bevelSize={0.02}
  //         bevelOffset={0}
  //         bevelSegments={5}
  //       >
  //         {userName}
  //       </Text3D>
  //     </Center>
  //   );
  //   console.log(text3d);
  // }, [userName]);
  const gltf_basket = useLoader(
    GLTFLoader,
    "/assets/objects/basket.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
      );
      loader.setDRACOLoader(dracoLoader);
    }
  );
  const gltf_pringles = useLoader(
    GLTFLoader,
    "/assets/objects/pringles.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
      );
      loader.setDRACOLoader(dracoLoader);
    }
  );
  const gltf_cosmetics = useLoader(
    GLTFLoader,
    "/assets/objects/cosmetics.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
      );
      loader.setDRACOLoader(dracoLoader);
    }
  );
  const gltf_choclate = useLoader(
    GLTFLoader,
    "/assets/objects/chocolate.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
      );
      loader.setDRACOLoader(dracoLoader);
    }
  );
  const gltf_wallet = useLoader(
    GLTFLoader,
    "/assets/objects/wallet.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
      );
      loader.setDRACOLoader(dracoLoader);
    }
  );
  // const gltf = useLoader(GLTFLoader, "../assets/objects/basket.glb");
  const material = new THREE.MeshMatcapMaterial();
  matcapTexture.colorSpace = THREE.SRGBColorSpace;
  matcapTexture.needsUpdate = true;

  material.matcap = matcapTexture;
  material.needsUpdate = true;
  console.log(isMobile);
  return (
    <>
      {!isMobile && (
        <OrbitControls
          ref={controls}
          enablePan={false}
          enableZoom={false} // highlight-line
          maxAzimuthAngle={Math.PI / 6} // highlight-line
          maxPolarAngle={Math.PI} // highlight-line
          minAzimuthAngle={-Math.PI / 6} // highlight-line
          minPolarAngle={0} // highlight-line
        />
      )}
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group
        ref={hamperRef}
        rotation-x={Math.PI * 0.1}
        rotation-y={-Math.PI * 0.3}
        position={[0, 0, 0]}
      >
        {/* {text3d} */}
        {userName ? (
          <Center position={[0, -0.3, 0.43]} rotation-x={-Math.PI * 0.1}>
            <Text3D
              material={material}
              font="./assets/fonts/disney-1/Disney_Regular.json"
              // font="./assets/fonts/motley-forces-font/Motley_Forces_Regular.json"
              // font="./assets/fonts/playball/Playball_Regular.json"
              size={0.15}
              height={0.03}
              curveSegments={12}
              bevelEnabled={false}
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              {userName}
            </Text3D>
          </Center>
        ) : null}
        <mesh receiveShadow position-y={-0.5} scale={0.4}>
          <primitive object={gltf_basket.scene} />
        </mesh>
        <mesh receiveShadow position={[-0.007, -0.48, -0.35]} scale={0.44}>
          <primitive object={gltf_pringles.scene} />
        </mesh>
        <mesh receiveShadow position={[-0.15, -0.48, 0.139]} scale={0.15}>
          <primitive object={gltf_cosmetics.scene} />
        </mesh>
        <mesh receiveShadow position={[-0.04, -0.18, 0.2]} scale={0.06}>
          <primitive object={gltf_choclate.scene} />
        </mesh>
        <mesh
          receiveShadow
          position={[-0.12, -0.18, -0.08]}
          rotation-x={-Math.PI * 0.04}
          rotation-y={Math.PI * 1}
          rotation-z={Math.PI * 1}
          scale={0.06}
        >
          <primitive object={gltf_wallet.scene} />
        </mesh>
      </group>
    </>
  );
};

export default Hamper;
