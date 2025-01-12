import React from "react";
import ProjectSlider from "../components/ProjectSlider";

const page = () => {
    return (
        <div className="flex items-center justify-center gap-5 flex-col pt-[100px] md:pt-0 lg:flex-row h-screen bg-[#0C011A]">
            <div className="flex flex-col gap-3">
                <h1 className=" text-[50px] text-white font-semibold">
                    My works<span className="text-red-500">.</span>
                </h1>
                <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
                    Here you can explore a collection of my projects that
                    demonstrate my expertise in web development. Each project
                    reflects my attention to detail, creativity, and ability to
                    deliver functional and visually appealing solutions. From
                    dynamic web applications to responsive designs, these works
                    showcase the breadth of my skills and passion for crafting
                    exceptional user experiences.
                </p>
            </div>

            <ProjectSlider />
        </div>
    );
};

export default page;
