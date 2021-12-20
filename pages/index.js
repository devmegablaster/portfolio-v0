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

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-grow">
                <Sidebar />
                <div className="bg-[#1f2428] border-r border-gray-600 text-white w-60">
                    <Paths />
                </div>
                <div className="bg-[#24292f] flex-grow flex flex-col text-white">
                    <div className="flex">
                        <OpenEditor open="index.js" path="/" />
                        <OpenEditor open="profile.js" path="/profile" />
                    </div>
                    <div className="flex-grow border-t flex flex-col border-gray-600">
                        <div className="bg-cover overflow-scroll h-max flex-grow text-lg">
                            <h1 className="text-2xl font-bold mt-2 text-center animate-none">
                                Home
                            </h1>
                            <h1 className="font-mono text-sm m-2 text-green-500">
                                <ReactTypingEffect
                                    text={"Hey There!"}
                                    speed={250}
                                />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
