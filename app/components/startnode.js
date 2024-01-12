import { memo } from "react";
import { Handle, Position } from 'reactflow';

function StartNode({data}){
    return(
        <div className="px-4 py-2 shadow-md rounded-md bg-lime-100 border-2 border-stone-400">
        <div className="flex">
          <div className="ml-2">
            <div className="text-lg font-bold text-zinc-400">{data.name}</div>
            <div className="text-gray-500">{data.job}</div>
          </div>
        </div>
  
        <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
        <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
      </div>
    )
}

export default memo(StartNode)