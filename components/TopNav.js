import React from "react";
import OpenEditor from "./OpenEditor";

function TopNav() {
    return (
        <div className="flex sticky top-0">
            <OpenEditor open="index.js" path="/" />
            <OpenEditor open="socials.js" path="/socials" />
            <OpenEditor open="projects.js" path="/projects" />
        </div>
    );
}

export default TopNav;
