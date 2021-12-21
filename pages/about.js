import Head from "next/head";
import File from "../components/File";
import Sidebar from "../components/Sidebar";
import { BiCodeAlt } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import Paths from "../components/Paths";
import OpenEditor from "../components/OpenEditor";
import Code from "../components/Code";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import ProjectTile from "../components/ProjectTile";
import ReactTypingEffect from "react-typing-effect";
import Link from "next/link";

export default function about() {
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
                            <div className="flex items-center ">
                                <img
                                    src="https://i.ibb.co/HK56JPL/1638594927184.jpg"
                                    alt="alt"
                                    className="w-24 h-24 border-2 border-red-500 rounded-full"
                                />
                                <div className="flex flex-col ml-4">
                                    <h1 className="font-bold text-lg">
                                        Ojas Tyagi
                                    </h1>
                                    <h1 className="font-light text-green-500">
                                        <ReactTypingEffect
                                            text={[
                                                "Full Stack Developer",
                                                "3D Animator",
                                                "Unity Game Developer",
                                                "Computer Science Student",
                                                "Competitive Coder",
                                            ]}
                                            speed={100}
                                            eraseDelay={1500}
                                            eraseSpeed={100}
                                            typingDelay={800}
                                        />
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 pb-6 shadow-2xl rounded-xl border-b border-blue-500">
                                <Link href="/socials">
                                    <h1 className="border border-red-500 p-2 w-28 cursor-pointer hover:rounded-xl rounded-md hover:scale-105 hover:shadow-xl hover:bg-red-500 transition">
                                        Contact Me
                                    </h1>
                                </Link>
                                <Link href="/projects">
                                    <h1 className="border border-red-500 p-2 w-32 cursor-pointer hover:rounded-xl rounded-md hover:scale-105 hover:shadow-xl hover:bg-red-500 transition">
                                        View Projects
                                    </h1>
                                </Link>
                            </div>
                            <h1 className="font-serif text-2xl border-b border-red-500 w-48 shadow-xl text-center p-1 rounded-md">
                                A little About Me
                            </h1>
                            <p className="font-mono">
                                <p className="text-green-500">Hey There,</p>I am{" "}
                                <span className="hover:underline transition">
                                    Ojas Tyagi
                                </span>
                                , a{" "}
                                <span className="text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition hover:p-1 p-1">
                                    Full Stack Developer
                                </span>
                                ,{" "}
                                <span className="text-green-500 font-semibold hover:bg-green-500 hover:text-white transition hover:p-1 p-1">
                                    Blender 3D Artist
                                </span>
                                ,{" "}
                                <span className="text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition hover:p-1 p-1">
                                    Unity 3D Game Developer
                                </span>
                                ,{" "}
                                <span className="text-rose-500 font-semibold hover:bg-rose-500 hover:text-white transition hover:p-1 p-1">
                                    Competitive Coder
                                </span>{" "}
                                and {"a "}
                                <span className="text-teal-500 font-semibold hover:bg-teal-500 hover:text-white transition hover:p-1 p-1">
                                    Learner
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
