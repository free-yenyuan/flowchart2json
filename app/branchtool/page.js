"use client";
import { Node } from "./components/node.js";
import { useEffect, useState, useCallback } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function BranchTool() {
    const [nodeList, setNodeList] = useState([{ output: "" }]);
    const [finalOutput, setOutput] = useState("");
    const [npcId,setNpcId] = useState(3);
    const handleAddNode = () => {
        setNodeList([...nodeList, { output: "" }]);
    };

    const handleNpcIdChange = (event)=>{
      setNpcId(event.target.value);
    }

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

    const handleDeleteNode = useCallback(
        (index) => {
            const newNodes = [...nodeList];
            newNodes.splice(index, 1);
            setNodeList(newNodes);
        },
        [nodeList]
    );

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(finalOutput);
            alert("文本已复制到剪贴板！");
        } catch (err) {
            console.error("复制到剪贴板失败:", err);
        }
    };

    // const handleDeleteNode = (index) => {
    //     setNodeList(nodeList.filter((_, i) => i !== index));
    // };

    useEffect(() => {
        setOutput(
            "{"+npcId+":[" + nodeList.map((_, index) => nodeList[index].output) + "]}"
        );
    }, [nodeList,npcId]);

    return (
        <div>
            <div className="w-full flex justify-center items-center mb-5">
              <span>NPC ID: </span>
              <input type="text" className="px-2 rounded-md border-dashed ml-2 ring-zinc-400 ring-1" defaultValue={3} onChange={handleNpcIdChange}></input>
            </div>
            <div className="flex gap-x-2">
                {nodeList.map((_, index) => (
                    <Node
                        onOutputChange={(value) =>
                            handleOutputChange(value, index)
                        }
                        onDeleteNode={handleDeleteNode}
                        title={`📖Node - ${index + 1}`}
                        pre_order={index + 1}
                        key={index}
                        onDelete={handleDeleteNode}
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
                {/* <button
                    className="flex text-center rounded-full bg-red-500 px-5 py-2 mt-5 float-left text-white hover:bg-red-600 transition-all"
                    onClick={() => handleDeleteNode(index)}
                >
                    Delete
                </button> */}
                <br></br>
            </div>
            <div className="flex justify-center items-center p-4  text-white mt-5 ">
                <h1 className="text-xl font-semibold text-black">output</h1>
                <div className="w-[500px] bg-stone-800 p-4 rounded-md ml-5">
                    <span className="text-wrap break-words">{finalOutput}</span>
                    <button className="ml-5 float-right" onClick={handleCopy}>
                        <ContentCopyIcon fontSize="small" />
                    </button>
                </div>
            </div>
        </div>
    );
}
