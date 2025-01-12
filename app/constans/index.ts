import {
    RxCrop,
    RxReader,
    RxRocket,
    RxAccessibility,
    RxHome,
    RxPerson,
    RxDashboard,
} from "react-icons/rx";

export const Socials = [
    {
        name: "Telegram",
        src: "/assets/telegram.svg",
        link: "https://t.me/dandel_ds",
    },
    {
        name: "gitHub",
        src: "/assets/gitHub.svg",
        link: "https://github.com/aduvancik",
    },
    {
        name: "Instagram",
        src: "/assets/instagram.svg",
        link: "https://www.instagram.com/aduvancik_official/",
    },
];

export const NavLinks = [
    {
        name: "Home",
        icon: RxHome,
        link: "/",
    },
    {
        name: "About me",
        icon: RxPerson,
        link: "/about-me",
    },
    {
        name: "Projects",
        icon: RxDashboard,
        link: "/my-projects",
    },
];

export const ProImages = [
    {
        src: "/assets/projects/1.jpg",
        link: "https://shopchik-3c85d.web.app/",
    },
    {
        src: "/assets/projects/2.jpg",
        link: "https://debate-night.netlify.app/",
    },
    {
        src: "/assets/projects/3.jpg",
        link: "https://taupe-semolina-2d754d.netlify.app/",
    },
    {
        src: "/assets/projects/4.jpg",
        link: "https://peppy-marzipan-4027e3.netlify.app/#",
    },
];

export const ProImages2 = [
    {
        src: "/assets/projects/5.jpg",
        link: "https://lustrous-sunburst-89debe.netlify.app",
    },
    {
        src: "/assets/projects/6.jpg",
        link: "https://thunderous-vacherin-533916.netlify.app/",
    },
    {
        src: "/assets/projects/7.jpg",
        link: "https://sensational-bublanina-2f81a8.netlify.app/",
    },
    {
        src: "/assets/projects/8.jpg",
        link: "https://calm-cuchufli-ade701.netlify.app/",
    },
];

export const ServiceData = [
    {
        icon: RxReader,
        title: "Frontend Development",
        backgroundImage: "/assets/space/SpaceCity7.jpeg",
        content:
            "Building responsive websites with HTML, CSS, SCSS, Tailwind CSS, and Bootstrap.",
    },
    {
        icon: RxRocket,
        title: "JavaScript & Frameworks",
        backgroundImage: "/assets/space/SpaceCity8.jpeg",
        content:
            "Developing interactive web applications with JavaScript, ReactJS, NextJS, and TypeScript.",
    },
    {
        icon: RxAccessibility,
        title: "State Management",
        backgroundImage: "/assets/space/SpaceCity5.jpeg",
        content:
            "Efficiently managing application state with Redux for scalable and maintainable solutions.",
    },
    {
        icon: RxCrop,
        title: "Version Control",
        backgroundImage: "/assets/space/SpaceCity9.jpeg",
        content:
            "Collaborating on projects using Git and GitHub to maintain code quality and streamline teamwork.",
    },
];
