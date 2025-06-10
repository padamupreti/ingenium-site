import { HiArrowUpRight } from "react-icons/hi2"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"

import techxDoc from "../assets/docs/techx-innovation.pdf"
import shortVideoDoc from "../assets/docs/short-video.pdf"
import openScienceDoc from "../assets/docs/open-science.pdf"
import oneSolDoc from "../assets/docs/one-world-solution.pdf"
import posterDesignDoc from "../assets/docs/poster-design.pdf"
import botArenaDoc from "../assets/docs/botarena-robotics.pdf"
import hackathonDoc from "../assets/docs/codesprint-hackathon.pdf"
import minMasterDoc from "../assets/docs/miniature-masterplan.pdf"
import innoInfraDoc from "../assets/docs/innovative-infrastructure.pdf"

import techxPic from "../assets/techx.webp"
import oneSolPic from "../assets/oneworld.jpg"
import innoInfraPic from "../assets/infra.webp"
import posterDesignPic from "../assets/poster.jpg"
import minMasterPic from "../assets/miniature.png"
import hackathonPic from "../assets/hackathon.png"
import botArenaPic from "../assets/robosoccer.jpg"
import shortVideoPic from "../assets/shortvideo.jpg"
import openSciencePic from "../assets/openscience.jpg"
import EventCard from "./EventCard"

function Events() {
    const events = [
        {
            name: "One World: One Solution",
            categories: ["Undergraduate (1st and 2nd year)"],
            description:
                "Propose and present sensible and practical solutions for problems in specified topic domains. Requires slide preparation and defense.",
            docLink: oneSolDoc,
            imgSrc: oneSolPic,
        },
        {
            name: "Innovative Infrastructure Challenge",
            categories: ["Undergraduate", "Civil", "Architecture"],
            description:
                "Design sustainable and inclusive infrastructure under specified themes. Requires physical models or CAD designs and posters.",
            docLink: innoInfraDoc,
            imgSrc: innoInfraPic,
        },
        {
            name: "Design & Build: Miniature Masterplan Challenge",
            categories: ["Undergraduate", "Architecture", "Civil"],
            description:
                "Create physical or 3D-printed models as solutions to real world infrastructure problems. Requires concept sheet with specified sections in addition.",
            docLink: minMasterDoc,
            imgSrc: minMasterPic,
        },
        {
            name: "BotArena: Robotics Innovation Show",
            categories: ["Undergraduate", "ELE & ELX", "CMP"],
            description:
                "Robotics competition to test programming and design skills. Requires participants' own kits with dimension and weight limits.",
            docLink: botArenaDoc,
            imgSrc: botArenaPic,
        },
        {
            name: "TechX Innovation Fair",
            categories: ["Undergraduate", "CMP", "ELE & ELX"],
            description:
                "Create software and hardware systems to solve problems under specified themes. Requires poster summarizing specified sections.",
            docLink: techxDoc,
            imgSrc: techxPic,
        },
        {
            name: "Poster Design Competition",
            categories: ["Undergraduate"],
            description:
                "Design creative posters to convey ideas with visual design principles. Requires submission of A2-sized poster in high resolution PDF and image formats.",
            docLink: posterDesignDoc,
            imgSrc: posterDesignPic,
        },
        {
            name: "Open Science Project Competition",
            categories: ["+2", "Diploma"],
            description:
                "Create STEM model prototypes for practical applications using scientific principles. Requires interactive demo and presentation.",
            docLink: openScienceDoc,
            imgSrc: openSciencePic,
        },
        {
            name: "Short Video Challenge: Engineer The Future",
            categories: ["+2", "Diploma"],
            description:
                "Showcase creative videos of short length under specified themes for social media. Must be original with no AI generation.",
            docLink: shortVideoDoc,
            imgSrc: shortVideoPic,
        },
    ]

    const hckCategories = ["Undergraduate", "CMP", "ELE & ELX"]

    return (
        <section id="events" className="mt-8 md:mt-10">
            <h2 className="text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold">
                Events
            </h2>
            <p className="mt-4 text-justify">
                Top teams will receive certificates and awards. Cash prize
                details will be disclosed soon.
            </p>
            <div className="mt-4 flex flex-col gap-8">
                <div className="border-2 border-teal-400/80 rounded-xl pb-5 px-1 md:px-3">
                    <div className="px-2 py-5 flex flex-col items-start md:flex-row gap-3">
                        <div className="bg-teal-400 text-gray-950 p-2 rounded-2xl text-sm uppercase">
                            Starts early on june 30
                        </div>
                        <span className="bg-cyan-500 text-gray-950 p-2 rounded-2xl text-sm uppercase">
                            Registered Teams: 0/15
                        </span>
                    </div>
                    <div className="flex flex-col gap-6 md:flex-row items-center bg-slate-100/10 backdrop-blur-xs p-2 xs:p-3 md:px-4 md:py-5 rounded-xl">
                        <div className="flex flex-col space-y-5 md:w-1/2">
                            <div>
                                <h3 className="text-teal-400/90 text-lg md:text-xl font-bold">
                                    CodeSprint Hackathon
                                </h3>
                                <div className="mt-2 flex gap-2 flex-wrap">
                                    {hckCategories.map((category) => (
                                        <span
                                            key={category}
                                            className="bg-teal-400/90 text-gray-950 p-1 rounded-full text-xs uppercase"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p>
                                Hackathon to test innovation, rapid prototyping
                                and teamwork. Problem statement to be revealed
                                at the start of event.
                            </p>
                            <p className="font-bold">
                                Please note that this event starts early on June
                                30, before the main event date on July 03. Also,
                                the no. of teams that can register is limited to
                                15.
                            </p>
                            <div className="flex space-x-2">
                                <a
                                    href={hackathonDoc}
                                    target="_blank"
                                    className="bg-cyan-500 text-gray-950 p-2 rounded-lg w-1/2 text-center"
                                >
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>Details</span>
                                        <HiArrowUpRight />
                                    </div>
                                </a>
                                <a
                                    href="#register"
                                    className="bg-teal-400/90 text-gray-950 p-2 rounded-lg w-1/2 text-center"
                                >
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>Register</span>
                                        <MdKeyboardDoubleArrowUp />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={hackathonPic}
                                alt="Hackathon Picture"
                                className="rounded-xl md:w-11/12 md:mx-auto lg:w-10/12"
                            />
                        </div>
                    </div>
                </div>
                {events.map((event) => (
                    <EventCard key={event.name} event={event} />
                ))}
            </div>
        </section>
    )
}

export default Events
