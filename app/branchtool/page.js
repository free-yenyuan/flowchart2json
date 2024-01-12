'use client'
import { useState,useEffect } from "react";

export default function BranchTool() {
  const [nodeText, setText] = useState('');
  const [order,setOrder] = useState(1);
  const [audioUrl, setAudioUrl] = useState('');
  const [bsUrl, setBsUrl] = useState('');
  const [duration,setDuration] = useState(0)

  const [outputJson,setJson] = useState(`{"text":${nodeText},"order":${order}}`)

  const handleChange = (event)=>{
    switch (event.target.id) {
      case 'Text':
        setText(String(event.target.value))
        break;
      case 'order':
        setOrder(event.target.value)
        break;
      case 'audioUrl':
        setAudioUrl(event.target.value)
        break;
      case 'bsUrl':
        setBsUrl(event.target.value)
        break;
      case 'duration':
        setDuration(event.target.value)
      default:
        break;
    }
    console.log(`${outputJson}`);
  }

  useEffect(()=>{
    var VoiceInfo = "}";
    if(audioUrl||bsUrl||duration) {
      VoiceInfo = `,"audioUrl":"${audioUrl}","bsUrl":"${bsUrl}","duration":${duration}}`;
    }
    setJson(`{"text":"${nodeText}","order":${order}`+VoiceInfo)
  },[nodeText,order,audioUrl,bsUrl,outputJson,duration])

  return (
    <div className="bg-zinc-400 h-full w-full ">
      <form className="w-1/2 ml-2">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Text
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="Text"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Order
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="order"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              AudioUrl
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="audioUrl"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              bsUrl
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="bsUrl"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Duration
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="duration"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="h-full w-1/2 float-right">
        {outputJson}
      </div>
    </div>
  );
}
