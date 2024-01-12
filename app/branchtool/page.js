"use client";
import { Node } from "./components/node.js";
import { useEffect, useState } from "react";

export default function BranchTool() {
    const [nodeList, setNodeList] = useState([{ output: "" }]);
    // const [nodeList, setNodeList] = useState([]);
    const handleAddNode = () => {
        setNodeList([...nodeList, { output: "" }]);
    };

    const handleOutputChange = (value, index) => {
        console.log(value);
        const newNodes = [...nodeList];
        // 确保在指定索引处有一个节点对象
        if (!newNodes[index]) {
            newNodes[index] = {}; // 如果没有，就创建一个新的对象
        }
        newNodes[index].output = value;
        setNodeList(newNodes);
    };

    const handleDeleteNode = (index) => {
        setNodeList(nodeList.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className=" bg-zinc-400 grid grid-cols-1 float-left">
                {nodeList.map((_, index) => (
                    <div key={index}>
                        <button
                            className="text-center align-middle rounded-full bg-red-500 px-5 mx-5 my-5 text-white list-none"
                            onClick={() => handleDeleteNode(index)}
                        >
                            Delete
                        </button>

                        <Node
                            onOutputChange={(output) =>
                                handleOutputChange(index, output)
                            }
                        ></Node>
                    </div>
                ))}
            </div>
            <div className="float-left">
                <button
                    className="flex text-center rounded-full bg-green-300 px-5 py-2 mt-5 float-left text-black"
                    onClick={handleAddNode}
                >
                    Add Node
                </button>
            </div>
            <div className="flex w-full md-y-5">
                <span>
                    {`{
                    3:[
                        ${nodeList[0].output}
                    ]
                }`}
                </span>
            </div>
        </div>
    );
}
