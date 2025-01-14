import Image from "next/image";
import { Particle } from "./Particle";

export default function Home() {
    return (
        <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
            <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
                <Particle />
            </div>
            <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
                <Image
                    src="/assets/MoustacheMan.png"
                    alt="MoustacheMan"
                    width={560}
                    height={560}
                    className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
                />
            </div>
            <Image
                src="/assets/top-left-img.png"
                alt="paint"
                width={230}
                height={230}
                className="absolute left-0 top-0"
            />
            <div className="flex flex-col gap-3 z-[10] pl-10 md:pl-40 pt-20">
                <h1 className="text-[25px] md:text-[50px] text-white max-w-[500px]">
                    Transforming ideas into{" "}
                    <span className="text-red-500">Digital Reality</span>
                </h1>
                <p className="text-[16px] text-gray-200 md:text-gray-400 md:pb-2 mb-10 max-w-[400px]">
                    As a passionate developer, I specialize in crafting sleek,
                    efficient, and user-friendly digital solutions. This
                    portfolio is a showcase of my journey in web development,
                    where I transform innovative ideas into cutting-edge
                    applications. From creative designs to robust functionality,
                    every project reflects my commitment to excellence and a
                    desire to deliver impactful results. Let’s explore my work
                    and envision how we can bring your ideas to life.
                </p>
                <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
                    <Image
                        src="/assets/rounded-text.png"
                        alt="projects"
                        width={160}
                        height={160}
                        className=" slow-spin"
                    />
                </div>
            </div>
        </main>
    );
}
