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
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
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
                            <h1 className="font-serif text-2xl w-48 shadow-xl text-center p-1 rounded-md">
                                <RoughNotation
                                    type="underline"
                                    show={true}
                                    color="red"
                                >
                                    A little About Me
                                </RoughNotation>
                            </h1>
                            <p className="font-mono leading-10">
                                <p className="text-green-500">Hey There,</p>I am{" "}
                                <span className="hover:underline transition">
                                    <RoughNotation
                                        type="circle"
                                        color="orange"
                                        show={true}
                                        padding={9}
                                        animationDelay={400}
                                    >
                                        Ojas&nbsp;Tyagi
                                    </RoughNotation>
                                </span>
                                , a{" "}
                                <span className="text-white font-semibold transition hover:p-1 p-1">
                                    <RoughNotation
                                        type="highlight"
                                        color="purple"
                                        show={true}
                                        padding="13"
                                        animationDelay={800}
                                    >
                                        Full&nbsp;Stack&nbsp;Developer
                                    </RoughNotation>
                                </span>
                                ,{" "}
                                <span className="text-white font-semibold transition hover:p-1 p-1">
                                    <RoughNotation
                                        type="highlight"
                                        color="green"
                                        show={true}
                                        padding="15"
                                        animationDelay={1600}
                                    >
                                        Blender&nbsp;3D&nbsp;Artist
                                    </RoughNotation>
                                </span>
                                ,{" "}
                                <span className="text-white font-semibold transition hover:p-1 p-1">
                                    <RoughNotation
                                        type="highlight"
                                        color="blue"
                                        show={true}
                                        padding="16"
                                        animationDelay={2400}
                                    >
                                        Unity&nbsp;3D&nbsp;Game&nbsp;Developer
                                    </RoughNotation>
                                </span>
                                ,{" "}
                                <span className="text-white transition hover:p-1 p-1">
                                    <RoughNotation
                                        type="highlight"
                                        color="red"
                                        show={true}
                                        padding="10"
                                        animationDelay={3200}
                                    >
                                        Competitive&nbsp;Coder
                                    </RoughNotation>
                                </span>{" "}
                                and {"a "}
                                <span className="text-white transition hover:p-1 p-1">
                                    <RoughNotation
                                        type="highlight"
                                        color="teal"
                                        show={true}
                                        padding="10"
                                        animationDelay={4000}
                                    >
                                        Learner
                                    </RoughNotation>
                                    !
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
