import { useState, useEffect, useCallback } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export function Node({ onOutputChange, output, title, pre_order, onDelete }) {
    const [nodeText, setText] = useState("");
    const [order, setOrder] = useState(pre_order);
    const [audioUrl, setAudioUrl] = useState("");
    const [bsUrl, setBsUrl] = useState("");
    const [duration, setDuration] = useState(0);

    const [outputJson, setJson] = useState(
        `{"text":${nodeText},"order":${order}}`
    );

    const inputType = ["text", "order", "audioUrl", "bsUrl", "duration"];

    const handleDelete = () => {
        onDelete(pre_order - 1); // Calling the onDelete prop function
    };

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
    }, [nodeText, order, audioUrl, bsUrl, duration]);

    return (
        <div className="bg-white shadow-md p-4 rounded-md">
            <div className="ml-2">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    {/* <button
                        className="float-right text-red-500"
                        onClick={handleDelete}
                    >
                        <DeleteIcon />
                    </button> */}
                </div>
                {inputType.map((value, index) => (
                    <div
                        className={
                            "sm:col-span-1 mb-2 " +
                            (value == "order" ? "sr-only" : "")
                        }
                        key={index}
                    >
                        <label className="block mb-1">{value}</label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="username"
                                    id={value}
                                    className={
                                        "w-full border border-gray-300 p-2 rounded-md transition-all"
                                    }
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="block h-full w-1/3 ml-2 align-middle sr-only">
                output:
                <input
                    className="w-full h-1/2 mx-2 "
                    defaultValue={output}
                    value={outputJson}
                    readOnly
                ></input>
            </div>
        </div>
    );
}
