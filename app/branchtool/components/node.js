import { useState, useEffect, useCallback } from "react";

export function Node({ onOutputChange, output }) {
    const [nodeText, setText] = useState("");
    const [order, setOrder] = useState(1);
    const [audioUrl, setAudioUrl] = useState("");
    const [bsUrl, setBsUrl] = useState("");
    const [duration, setDuration] = useState(0);

    const [outputJson, setJson] = useState(
        `{"text":${nodeText},"order":${order}}`
    );

    const handleChange = (event) => {
        switch (event.target.id) {
            case "text":
                setText(event.target.value);
                break;
            case "order":
                setOrder(event.target.value);
                break;
            case "audioUrl":
                setAudioUrl(event.target.value);
                break;
            case "bsUrl":
                setBsUrl(event.target.value);
                break;
            case "duration":
                setDuration(event.target.value);
            default:
                break;
        }
    };

    useEffect(() => {
        if (!nodeText) {
            return;
        }
        var VoiceInfo = "}";
        if (audioUrl || bsUrl || duration) {
            VoiceInfo = `,"audioUrl":"${audioUrl}","bsUrl":"${bsUrl}","duration":${duration}}`;
        }
        setJson(`{"text":"${nodeText}","order":${order}` + VoiceInfo);
        onOutputChange(`{"text":"${nodeText}","order":${order}` + VoiceInfo);
    }, [nodeText, order, audioUrl, bsUrl, duration, onOutputChange]);

    return (
        <div className="flex bg-zinc-400 h-full w-full float-left ">
            <form className="w-1/2 ml-2">
                <div className="mt-2 mb-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                    <div className="sm:col-span-1">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Text
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="username"
                                    id="text"
                                    className="block flex-1 border-0 bg-transparent py-1 px-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6 w-full"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-1">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Order
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="username"
                                    id="order"
                                    className="block flex-1 border-0 bg-transparent py-1 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6 w-full"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-1">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            AudioUrl
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="username"
                                    id="audioUrl"
                                    className="block flex-1 border-0 bg-transparent py-1 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6 w-full"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-1">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            bsUrl
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="username"
                                    id="bsUrl"
                                    className="block flex-1 border-0 bg-transparent py-1 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6 w-full"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-1">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Duration
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="username"
                                    id="duration"
                                    className="block flex-1 border-0 bg-transparent py-1 pl-1 text-gray-900  focus:ring-0 sm:text-sm sm:leading-6 w-full"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="block h-full w-1/3 ml-2 align-middle mt-2">
                output:
                <input className="w-full" value={outputJson} readOnly></input>
            </div>
        </div>
    );
}
