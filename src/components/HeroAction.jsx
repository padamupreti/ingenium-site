import necLogo from "../assets/nec.png"
import ingeniumLogo from "../assets/ingenium.png"

function HeroAction() {
    return (
        <div className="flex flex-col space-y-2 relative z-0">
            <div className="h-36 w-36 md:h-40 md:w-40 rounded-full bg-teal-300/10 blur-xl absolute -z-10 pointer-events-none -top-10 sm:top-0 -left-20"></div>
            <div className="h-36 w-36 md:h-40 md:w-40 rounded-full bg-teal-400/10 blur-xl absolute -z-10 pointer-events-none -bottom-10 sm:bottom-0 -right-10 sm:-right-20 md:-right-35"></div>
            <div className="flex flex-col space-y-3">
                <div>
                    <img
                        src={necLogo}
                        alt="nec Logo"
                        className="rounded-full h-20 lg:h-24 w-auto"
                    />
                </div>
                <img
                    src={ingeniumLogo}
                    alt="Ingenium Logo"
                    className="h-14 xs:h-16 lg:h-20 w-auto"
                />
            </div>
            <div className="flex flex-col space-y-0">
                <span className="font-robotoslab xs:text-lg">
                    Prize Pool NRP
                </span>
                <span className="font-robotoslab font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#00adef] via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                    3,00,000
                </span>
            </div>
            <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfBWibuZZO3q9MU_cUKa2ZEw4CCeu0n_MFO_yfkbJVAYNBnKQ/viewform"
                className="w-fit mt-7 bg-teal-400/90 text-gray-950 hover:bg-transparent hover:text-teal-400/90 border border-teal-400/90 px-16 sm:px-20 py-2 rounded-lg font-medium text-sm xs:text-md lg:text-lg"
            >
                Register Now
            </a>
        </div>
    )
}

export default HeroAction
