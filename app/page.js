"use client";
import Typewriter from "typewriter-effect";

export default function Home() {
    return (
        <div className="w-1/2 h-1/2 mx-auto">
            <div id="desc" className="">
                <Typewriter
                    options={{
                        wrapperClassName: "text-4xl",
                        cursorClassName: "text-4xl text-zinc-400",
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(
                                "A simple tool box for developing PlayMe."
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
