import React from "react";
import Paths from "../components/Paths";
import Sidebar from "../components/Sidebar";
import { BiCodeAlt } from "react-icons/bi";
import OpenEditor from "../components/OpenEditor";

function profile() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-grow">
                <Sidebar />
                <div className="bg-black text-white w-60 border-r border-gray-600">
                    <Paths />
                </div>
                <div className="bg-[#15181d] flex-grow text-white">
                    <OpenEditor open="profile.js" path="/profile" />
                    <div className="flex-grow border-t border-gray-600">
                        Content
                    </div>
                </div>
            </div>
            <div className="bg-[#15181d]">
                <div className="flex p-1 border-t border-gray-600">
                    <h1 className="text-gray-400">Hello</h1>
                </div>
            </div>
        </div>
    );
}

export default profile;
