'use client'
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

export default function Canvas() {
  return (
    <div className='w-full h-full'>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}