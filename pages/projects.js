import Head from "next/head";
import File from "../components/File";
import Sidebar from "../components/Sidebar";
import { BiCodeAlt } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import Paths from "../components/Paths";
import OpenEditor from "../components/OpenEditor";
import Code from "../components/Code";
import Footer from "../components/Footer";
import ReactTypingEffect from "react-typing-effect";
import TopNav from "../components/TopNav";
import ProjectTile from "../components/ProjectTile";
import { RoughNotation } from "react-rough-notation";

export default function projects() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-grow">
                <Sidebar />
                <div className="bg-[#1f2428] border-r border-gray-600 text-white w-60">
                    <Paths />
                </div>
                <div className="bg-[#24292f] flex-grow flex flex-col text-white">
                    <div className="flex">
                        <TopNav />
                    </div>
                    <div className="flex-grow border-t flex flex-col border-gray-600">
                        <div className="bg-conten bg-no-repeat bg-cover flex flex-col p-8 space-y-5 flex-grow text-lg">
                            <h1 className="font-mono text-red-500 text-5xl">
                                <RoughNotation
                                    type="underline"
                                    color="red"
                                    animationDuration={4000}
                                    iterations={6}
                                    show="true"
                                >
                                    Projects
                                </RoughNotation>
                            </h1>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2">
                                <ProjectTile
                                    title="VSCode Portfolio"
                                    githubLink="https://github.com/MEGA-BLASTER2004/portfolio/"
                                    viewLink="https://dev.devmegablaster.engineer"
                                    description="Next JS portfolio inspired by VSCode IDE"
                                    image="https://i.ibb.co/fDH6VYh/Screenshot-2021-12-21-at-9-30-28-AM.png"
                                />
                                <ProjectTile
                                    title="Geex Points"
                                    githubLink="https://github.com/MEGA-BLASTER2004/geex-points/"
                                    viewLink="https://dev.devmegablaster.engineer"
                                    description="Full Stack web application based on sustainable waste disposal"
                                    image="https://i.ibb.co/fDH6VYh/Screenshot-2021-12-21-at-9-30-28-AM.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
