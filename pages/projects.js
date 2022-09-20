import Head from 'next/head';
import File from '../components/File';
import Sidebar from '../components/Sidebar';
import { BiCodeAlt } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';
import Paths from '../components/Paths';
import OpenEditor from '../components/OpenEditor';
import Code from '../components/Code';
import Footer from '../components/Footer';
import ReactTypingEffect from 'react-typing-effect';
import TopNav from '../components/TopNav';
import ProjectTile from '../components/ProjectTile';
import { RoughNotation } from 'react-rough-notation';
import CursorAnimation from '../components/CursorAnimation';
import dynamic from 'next/dynamic';
const AnimatedCursor = dynamic(import('react-animated-cursor'), { ssr: false });

export default function projects(props) {
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
                                    title="TidyTown"
                                    githubLink="https://github.com/MEGA-BLASTER2004/"
                                    viewLink="https://tidytown.vercel.app/"
                                    description="TidyTown is a Revamp for The original Idea of Geex Points with an Updated UI (HACKATHON WINNER)"
                                    image="https://i.ibb.co/TTj8CQD/Screenshot-2022-09-20-at-11-56-49-PM.png"
                                />
                                <ProjectTile
                                    title="Gravitas 2022"
                                    githubLink="https://github.com/MEGA-BLASTER2004/"
                                    viewLink="https://gravitas.vit.ac.in/"
                                    description="Gravitas is an Event organised by VIT every Year, in 2022 i Developed the Website for them..."
                                    image="https://i.ibb.co/LvS6WM3/Screenshot-2022-09-21-at-12-11-37-AM.png"
                                />
                                <ProjectTile
                                    title="VSCode Portfolio"
                                    githubLink="https://github.com/MEGA-BLASTER2004/portfolio/"
                                    viewLink="https://dev.devmegablaster.engineer"
                                    description="Portfolio made using Next.js inspired by Visual Studio Code IDE Dark Theme (Renovation Soon :) )"
                                    image="https://i.ibb.co/FbS2Nc5/Screenshot-2021-12-21-at-11-18-40-PM.png"
                                />
                                <ProjectTile
                                    title="BunkMates"
                                    githubLink="https://github.com/MEGA-BLASTER2004/"
                                    viewLink="https://bunkmates.vercel.app/"
                                    description="BunkMates is a platform that helps you find your RoomMates (3000+ users on the first day)"
                                    image="https://i.ibb.co/gvkCK6D/Screenshot-2022-09-21-at-12-08-38-AM.png"
                                />
                                <ProjectTile
                                    title="Food 101"
                                    githubLink="https://github.com/MEGA-BLASTER2004/food101/"
                                    viewLink="https://share.streamlit.io/mega-blaster2004/food_101/app/app.py"
                                    description="Food 101 is a Deep Learning Model trained on the famous dataset food 101 having 86% accuracy"
                                    image="https://i.ibb.co/BBcsk5J/Screenshot-2021-12-21-at-11-37-39-PM.png"
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
                                    title="Spotify Web Controller"
                                    githubLink="https://github.com/MEGA-BLASTER2004/"
                                    viewLink="https://spotify.devmegablaster.engineer/"
                                    description="Spotify WebController uses spotify API to control an active device (Premium Required)"
                                    image="https://i.ibb.co/jwmTxRj/Screenshot-2022-02-02-at-7-59-28-PM.png"
                                />
                                <ProjectTile
                                    title="Why? Streams Streaming Platform"
                                    githubLink="https://github.com/MEGA-BLASTER2004/"
                                    viewLink="https://dev.devmegablaster.engineer/"
                                    description="Why? Streams is a streaming platform where you can stream and what not (UNDER DEVELOPMENT)"
                                    image="https://i.ibb.co/0hgft7Z/Screenshot-2022-02-02-at-8-05-12-PM.png"
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
