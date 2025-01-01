"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2 } from "../constans";
import Image from "next/image";

const ProjectSlider = () => {
    return (
        <div className="w-[70%] md:w-[40%]">
            <Swiper
                breakpoints={{
                    700: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
            >
                <SwiperSlide className="mb-14">
                    <div className="grid grid-cols-2 gap-4 px-16 max-w-max">
                        {ProImages.map((image) => (
                            <div
                                className="relative group w-max max-w-[100%] h-[150px] md:h-[230px] md:max-w-[100%] min-w-[100%]"
                                key={image.src}
                            >
                                <Image
                                    src={image.src}
                                    alt="project image"
                                    width={280}
                                    height={280}
                                    className="ronded-md h-full w-full max-w-[100%] object-cover"
                                />
                                <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                                <div className="cursor-pointer absolute flex inset-0 bg-gradient-to-r items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-ld]">
                                    View Project
                                    <Image
                                        src={"/assets/icons/arrow-right.svg"}
                                        alt="arrow right"
                                        width={20}
                                        height={20}
                                        className="invert brightness-0 ml-2 "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mb-14">
                    <div className="grid grid-cols-2 gap-4 px-16 max-w-max">
                        {ProImages2.map((image) => (
                            <div
                                className="relative group w-max max-w-[100%] h-[150px] md:h-[230px] md:max-w-[100%] min-w-[100%]"
                                key={image.src}
                            >
                                <Image
                                    src={image.src}
                                    alt="project image"
                                    width={280}
                                    height={280}
                                    className="ronded-md h-full w-full max-w-[100%] object-cover"
                                />
                                <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                                <div className="cursor-pointer absolute flex inset-0 bg-gradient-to-r items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-ld]">
                                    View Project
                                    <Image
                                        src={"/assets/icons/arrow-right.svg"}
                                        alt="arrow right"
                                        width={20}
                                        height={20}
                                        className="invert brightness-0 ml-2 "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
            
            </Swiper>
        </div>
    );
};

export default ProjectSlider;
