"use client";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

export default function Home() {
    const stringSplitter = (string) => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
    };

    return (
        <div className="w-1/2 h-1/2 mx-auto">
            <div id="desc" className="">
                <Typewriter
                    options={{
                        wrapperClassName: "text-4xl",
                        cursorClassName: "text-4xl text-zinc-400",
                        stringSplitter,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(
                                "A Simple ToolBox📦 For PlayMe Developer."
                            )
                            .callFunction(() => {
                                console.log("hello!");
                            })
                            .start();
                    }}
                />
            </div>
        </div>
    );
}
