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
            <div className="flex items-center justify-center mt-10 text-center sm:hidden">
                <h1>Please Rotate your Screen or view on Desktop</h1>
            </div>
            <div className="hidden sm:flex flex-grow">
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
                                    strokeWidth={0.5}
                                >
                                    Projects
                                </RoughNotation>
                            </h1>
                            <div className="grid grid-cols-2 overflow-y-auto lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-2 gap-2">
                                <ProjectTile
                                    title="VSCode Portfolio"
                                    githubLink="https://github.com/MEGA-BLASTER2004/portfolio/"
                                    viewLink="https://dev.devmegablaster.engineer"
                                    description="Portfolio made using Next.js inspired by Visual Studio Code IDE Dark Theme"
                                    image="https://i.ibb.co/FbS2Nc5/Screenshot-2021-12-21-at-11-18-40-PM.png"
                                />
                                <ProjectTile
                                    title="Geex Points"
                                    githubLink="https://github.com/MEGA-BLASTER2004/geex-points/"
                                    viewLink="https://geex-points.netlify.app/"
                                    description="Full Stack React web application based on sustainable waste disposal and collection"
                                    image="https://i.ibb.co/HzT3BjS/Screenshot-2021-12-21-at-11-23-29-PM.png"
                                />
                                <ProjectTile
                                    title="VITDS Assignments"
                                    githubLink="https://github.com/MEGA-BLASTER2004/vitds/"
                                    viewLink="https://vit.devmegablaster.engineer"
                                    description="VIT Data Sc Assignment portal made using Next.js and Next Auth (Discord) [Members Only]"
                                    image="https://i.ibb.co/B2nFPXK/Screenshot-2021-12-21-at-11-29-37-PM.png"
                                />
                                <ProjectTile
                                    title="Food 101"
                                    githubLink="https://github.com/MEGA-BLASTER2004/food101/"
                                    viewLink="https://share.streamlit.io/mega-blaster2004/food_101/app/app.py"
                                    description="Food 101 is a Deep Learning Model trained on the famous dataset food 101 having 86% accuracy"
                                    image="https://i.ibb.co/BBcsk5J/Screenshot-2021-12-21-at-11-37-39-PM.png"
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
