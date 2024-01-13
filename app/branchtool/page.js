"use client";
import { Node } from "./components/node.js";
import { useEffect, useState, useCallback } from "react";

export default function BranchTool() {
    const [nodeList, setNodeList] = useState([{ output: "" }]);
    // const [nodeList, setNodeList] = useState([]);
    const handleAddNode = () => {
        setNodeList([...nodeList, { output: "" }]);
    };

    const handleOutputChange = useCallback(
        (value, index) => {
            const newNodes = [...nodeList];
            // 确保在指定索引处有一个节点对象
            if (!newNodes[index]) {
                newNodes[index] = {}; // 如果没有，就创建一个新的对象
            }
            newNodes[index].output = value;
            setNodeList(newNodes);
        },
        [nodeList]
    );

    const handleDeleteNode = (index) => {
        setNodeList(nodeList.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="flex gap-x-2">
                {nodeList.map((_, index) => (
                    <Node
                        onOutputChange={(value) =>
                            handleOutputChange(value, index)
                        }
                        title={`📖Node - ${index + 1}`}
                        key={index}
                    ></Node>
                ))}
            </div>
            <div className="flex justify-center items-center gap-x-4">
                <button
                    className="flex text-center rounded-full bg-green-300 px-5 py-2 mt-5 float-left text-black hover:bg-green-400 transition-all"
                    onClick={handleAddNode}
                >
                    Add Node
                </button>
                <button
                    className="flex text-center rounded-full bg-red-500 px-5 py-2 mt-5 float-left text-white hover:bg-red-600 transition-all"
                    onClick={() => handleDeleteNode(index)}
                >
                    Delete
                </button>
                <br></br>
            </div>
            <div className="flex w-full justify-center items-center">
                <span>
                    {"{3:[" +
                        nodeList.map((_, index) => nodeList[index].output) +
                        "]}"}
                </span>
            </div>
        </div>
    );
}
