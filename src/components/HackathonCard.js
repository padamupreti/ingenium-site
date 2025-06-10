import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { HiArrowUpRight } from "react-icons/hi2"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"

function HackathonCard() {
    const [total, setTotal] = useState(15)
    const [registered, setRegistered] = useState(0)
    const hckCategories = ["Undergraduate", "CMP", "ELE & ELX"]

    useEffect(() => {
        fetch("/hackathon.json")
            .then((res) => res.json())
            .then((data) => {
                const { registeredTeams, totalTeams } = data
                setRegistered(registeredTeams)
                setTotal(totalTeams)
            })
            .catch(() => {
                setRegistered(0)
                setTotal(15)
            })
    }, [])

    return (
        <div className="border-2 border-teal-400/80 rounded-xl pb-5 px-1 md:px-3">
            <div className="px-2 py-5 flex flex-col items-start md:flex-row gap-3">
                <div className="bg-teal-400 text-gray-950 p-2 rounded-2xl text-sm uppercase">
                    Starts early on july 01
                </div>
                <span className="bg-cyan-500 text-gray-950 p-2 rounded-2xl text-sm uppercase">
                    Registered Teams: <span>{registered}</span>/
                    <span>{total}</span>
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
                        Hackathon to test innovation, rapid prototyping and
                        teamwork. Problem statement to be revealed at the start
                        of event.
                    </p>
                    <p className="font-bold">
                        Please note that this event starts early on July 01,
                        before the main event date on July 03. Also, the no. of
                        teams that can register is limited to {total}.
                    </p>
                    <div className="flex space-x-2">
                        <Link
                            href={"/docs/codesprint-hackathon.pdf"}
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
                        src={"/hackathon.png"}
                        alt="Hackathon Picture"
                        width={800}
                        height={449}
                        unoptimized
                        className="rounded-xl md:w-11/12 md:mx-auto lg:w-10/12"
                    />
                </div>
            </div>
        </div>
    )
}

export default HackathonCard
