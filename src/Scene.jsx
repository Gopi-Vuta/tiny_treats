import { Canvas } from "@react-three/fiber";
import Hamper from "./components/Hamper";

export default function Scene({ userName, speed }) {
  return (
    <div className="md:w-1/2 w-full h-full">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <Hamper userName={userName} speed={speed} />
      </Canvas>
    </div>
  );
}
