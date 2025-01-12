import Image from "next/image";
import React from "react";
import ServiceSlider from "../components/ServiceSlider";

const page = () => {
    return (
        <div className="flex pt-32 bg-[#0C011A] h-screen overflow-hidden">
            <div className="mx-auto flex flex-col gap-3">
                <h1 className=" text-[50px] text-white font-semibold">
                    My Skills<span className="text-red-500">.</span>
                </h1>
            </div>
            <div className="absolute -left-16 bottom-5 rotate-12 animate-pulse duraton-75">
                <Image
                    src={"/assets/bulb.png"}
                    alt="bulb"
                    width={260}
                    height={260}
                    className="w-full h-full hidden md:block"
                />
            </div>
            <ServiceSlider />
        </div>
    );
};

export default page;
