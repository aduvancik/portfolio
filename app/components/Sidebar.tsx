"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "../constans";
import Link from "next/link";
import Transition from "./Transition";

const Sidebar = () => {
    const [isRouting, setIsRouting] = useState(false);
    const [isActive, setIsActive] = useState("Home");
    const [prevPath, setPrevPath] = useState("/");
    const [isAnimationAllowed, setIsAnimationAllowed] = useState(true);

    const path = usePathname();

    // Check screen size to enable/disable animation
    useEffect(() => {
        const handleResize = () => {
            setIsAnimationAllowed(window.innerWidth >= 768); // Enable animation only for screens >= md (768px)
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (prevPath !== path && isAnimationAllowed) {
            setIsRouting(true);
        }
    }, [path, prevPath, isAnimationAllowed]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setIsRouting(false);
            }, 1200);
            return () => clearTimeout(timeout);
        }
    }, [isRouting]);

    return (
        <div className="fixed md:top-[40%] bottom-2  md:right-8 right-1/2 transform translate-x-1/2 md:translate-x-0 z-[20] md:h-[200px] md:w-[48px] rounded-full bg-gray-500 bg-opacity-50 md:p-0 p-2">
            {isRouting && isAnimationAllowed && <Transition />}
            <AnimatePresence mode="wait">
                <div className="flex md:flex-col gap-5 md:pb-3 justify-center items-center h-full">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.link}
                            onClick={() => setIsActive(link.name)}
                        >
                            <link.icon
                                className={`w-[28px] h-[28px] ${
                                    isActive === link.name
                                        ? "text-orange-500"
                                        : "text-white"
                                }`}
                            />
                        </Link>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    );
};

export default Sidebar;
