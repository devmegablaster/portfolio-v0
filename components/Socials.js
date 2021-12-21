import React from "react";

function Socials() {
    return (
        <div>
            <h1 className="font-mono text-red-500 text-xl">
                const <span className="text-green-500">socials</span>{" "}
                <span className="text-white">={" {"}</span>
            </h1>
            <h1 className="text-white font-mono text-base">
                "website":{" "}
                <span className="text-orange-500">
                    <a
                        href="https://dev.devmegablaster.engineer"
                        className="hover:underline"
                    >
                        dev.devmegablaster.engineer
                    </a>
                </span>
                ,
            </h1>
            <h1 className="text-white font-mono text-base">
                "github":{" "}
                <span className="text-orange-500">
                    <a
                        href="https://github.com/MEGA-BLASTER2004"
                        className="hover:underline"
                    >
                        MEGABLASTER
                    </a>
                </span>
                ,
            </h1>
            <h1 className="text-white font-mono text-base">
                "Linkedin":{" "}
                <span className="text-orange-500">
                    <a
                        href="https://www.linkedin.com/in/ojas-tyagi-478955189/"
                        className="hover:underline"
                    >
                        Ojas Tyagi
                    </a>
                </span>
                ,
            </h1>
            <h1 className="text-white font-mono text-base">
                "Instagram":{" "}
                <span className="text-orange-500">
                    <a
                        href="https://www.instagram.com/next._.js/"
                        className="hover:underline"
                    >
                        next._.js
                    </a>
                </span>
                ,
            </h1>
            <h1 className="text-white font-mono text-base">
                "Email":{" "}
                <span className="text-orange-500">
                    <span className="hover:underline select-all">
                        devmegablaster@gmail.com
                    </span>
                </span>
            </h1>
            <h1 className="text-xl">{"}"}</h1>
        </div>
    );
}

export default Socials;
