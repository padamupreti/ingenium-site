import { useState } from "react"
import { FaX } from "react-icons/fa6"
import { FaBars } from "react-icons/fa"

function Nav() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <nav
                className={`p-4 ${
                    openMenu ? "translate-y-16" : "-translate-y-full"
                } flex flex-col space-y-2 bg-gray-950 text-white absolute z-10 top-0 left-0 w-full transition-transform duration-300 ease-in-out`}
            >
                <a href="#about" className="py-2 hover:text-emerald-400">
                    About
                </a>
                <a href="#events" className="py-2 hover:text-emerald-400">
                    Events
                </a>
                <a href="#sponsors" className="py-2 hover:text-emerald-400">
                    Sponsors
                </a>
                <a href="#contact" className="py-2 hover:text-emerald-400">
                    Contact
                </a>
                <a href="#faq" className="py-2 hover:text-emerald-400">
                    FAQ
                </a>
            </nav>
            <nav className="h-16 px-4 border-b border-b-gray-700 bg-gray-950 text-white flex items-center justify-center md:justify-between relative z-20">
                <button
                    className="text-xl cursor-pointer w-1/12 md:hidden"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {openMenu ? <FaX /> : <FaBars />}
                </button>
                <h1 className="text-2xl md:text-3xl w-11/12 md:w-4/12 text-center font-bold">
                    <a href=".">
                        <span className="italic font-extrabold">nec </span>
                        <span className="text-emerald-400">Ingenium</span>
                    </a>
                </h1>
                <div className="hidden md:flex justify-evenly w-8/12 text-lg">
                    <a href="#about" className="py-2 hover:text-emerald-400">
                        About
                    </a>
                    <a href="#events" className="py-2 hover:text-emerald-400">
                        Events
                    </a>
                    <a href="#sponsors" className="py-2 hover:text-emerald-400">
                        Sponsors
                    </a>
                    <a href="#contact" className="py-2 hover:text-emerald-400">
                        Contact
                    </a>
                    <a href="#faq" className="py-2 hover:text-emerald-400">
                        FAQ
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Nav
