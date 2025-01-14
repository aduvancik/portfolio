import React from "react";
import { Socials } from "../constans";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="fixed top-0 bg-transperent z-[20] w-full flex gap-5 md:justify-between p-5 px-7">
            <h1 className="text-white text-[30px] md:text-[45px]">
                Oleg <span className="font-thin">Kryvogub</span>
                <span className="text-red-500">.</span>
            </h1>
            <div className="flex flex-row items-center gap-5 cursor-pointer">
                {Socials.map((social) => (
                    <Link key={social.name} href={social.link}>
                        <Image
                            src={social.src}
                            alt={social.name}
                            width={24}
                            height={24}
                            className="hover:scale-125 duration-150 w-6 h-6"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};
