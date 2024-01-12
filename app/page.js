import Image from "next/image";
import Canvas from "./components/canvas";

export default function Home() {
    return (
        <div className="flex w-1/2 h-1/2">
            <Canvas />
        </div>
    );
}
