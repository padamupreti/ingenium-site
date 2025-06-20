import Link from "next/link"
import Image from "next/image"
import { HiArrowUpRight } from "react-icons/hi2"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"

import OrgCard from "./OrgCard"

function EventCard({ event }) {
    const {
        name,
        categories,
        description,
        docLink,
        imgSrc,
        imgWidth,
        imgHeight,
        member,
        profMember,
    } = event

    return (
        <div className="flex flex-col gap-6 md:flex-row items-center bg-slate-100/10 backdrop-blur-xs p-2 xs:p-3 md:px-4 md:py-5 border border-white/10 rounded-xl">
            <div className="flex flex-col space-y-5 md:w-1/2">
                <div>
                    <h3 className="text-teal-400/90 text-lg md:text-xl font-bold">
                        {name}
                    </h3>
                    <div className="mt-2 flex gap-2 flex-wrap">
                        {categories.map((category) => (
                            <span
                                key={category}
                                className="bg-teal-400/90 text-gray-950 p-1 rounded-full text-xs uppercase"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
                <p>{description}</p>
                <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
                    <OrgCard member={member} />
                    {profMember && <OrgCard member={profMember} />}
                </div>
                <div className="flex space-x-2">
                    <Link
                        href={docLink}
                        target="_blank"
                        className="bg-cyan-500 text-gray-950 p-2 rounded-lg w-1/2 text-center"
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <span>Details</span>
                            <HiArrowUpRight />
                        </div>
                    </Link>
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
                <Image
                    src={imgSrc}
                    alt="Event Picture"
                    width={imgWidth}
                    height={imgHeight}
                    unoptimized
                    className="rounded-xl md:w-11/12 md:mx-auto lg:w-10/12"
                />
            </div>
        </div>
    )
}

export default EventCard
