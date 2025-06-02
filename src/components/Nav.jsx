import { useState } from "react"
import { FaX } from "react-icons/fa6"
import { FaBars } from "react-icons/fa"

function Nav() {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => setOpenMenu(!openMenu)

    return (
        <>
            <nav
                className={`p-4 ${
                    openMenu ? "translate-y-16" : "-translate-y-full"
                } flex flex-col space-y-2 bg-gray-950/95 text-white absolute z-10 top-0 left-0 w-full transition-transform duration-300 ease-in-out`}
            >
                <a
                    href="#about"
                    className="py-2 hover:text-green-400/90"
                    onClick={toggleMenu}
                >
                    About
                </a>
                <a
                    href="#events"
                    className="py-2 hover:text-green-400/90"
                    onClick={toggleMenu}
                >
                    Events
                </a>
                <a
                    href="#sponsors"
                    className="py-2 hover:text-green-400/90"
                    onClick={toggleMenu}
                >
                    Sponsors
                </a>
                <a
                    href="#contact"
                    className="py-2 hover:text-green-400/90"
                    onClick={toggleMenu}
                >
                    Contact
                </a>
                <a
                    href="#faq"
                    className="py-2 hover:text-green-400/90"
                    onClick={toggleMenu}
                >
                    FAQ
                </a>
            </nav>
            <nav className="h-16 px-4 border-b border-b-gray-700 bg-gray-950/95 text-white flex items-center justify-center md:justify-between relative z-20">
                <button
                    className="text-xl cursor-pointer w-1/12 md:hidden"
                    onClick={toggleMenu}
                >
                    {openMenu ? <FaX /> : <FaBars />}
                </button>
                <h1 className="text-xl md:text-2xl w-11/12 md:w-4/12 text-center font-bold">
                    <a href=".">
                        <span className="italic font-extrabold">nec </span>
                        <span className="text-green-400/90">Ingenium</span>
                    </a>
                </h1>
                <div className="hidden md:flex justify-evenly w-8/12">
                    <a href="#about" className="py-2 hover:text-green-400/90">
                        About
                    </a>
                    <a href="#events" className="py-2 hover:text-green-400/90">
                        Events
                    </a>
                    <a
                        href="#sponsors"
                        className="py-2 hover:text-green-400/90"
                    >
                        Sponsors
                    </a>
                    <a href="#contact" className="py-2 hover:text-green-400/90">
                        Contact
                    </a>
                    <a href="#faq" className="py-2 hover:text-green-400/90">
                        FAQ
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Nav
