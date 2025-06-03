function HeroAction() {
    return (
        <div className="py-8 md:py-16 flex flex-col space-y-1 md:space-y-2 lg:space-y-3 relative z-0">
            <div className="h-36 w-36 md:h-40 md:w-40 rounded-full bg-green-300/10 blur-xl absolute -z-10 pointer-events-none -top-10 sm:top-0 -left-20"></div>
            <div className="h-36 w-36 md:h-40 md:w-40 rounded-full bg-green-400/10 blur-xl absolute -z-10 pointer-events-none -bottom-10 sm:bottom-0 -right-10 sm:-right-20 md:-right-35"></div>
            <span className="font-extrabold text-5xl xs:text-6xl lg:text-7xl italic">
                nec
            </span>
            <span className="font-bold text-5xl xs:text-6xl lg:text-7xl text-green-400/90">
                Ingenium
            </span>
            <span className="font-bold text-5xl xs:text-6xl lg:text-7xl">
                2025
            </span>
            <span className="flex gap-1 uppercase text-xs xs:text-sm">
                <span>Code</span>
                <span>·</span>
                <span>Create</span>
                <span>·</span>
                <span>Elevate</span>
            </span>
            <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfBWibuZZO3q9MU_cUKa2ZEw4CCeu0n_MFO_yfkbJVAYNBnKQ/viewform"
                className="w-fit mt-3 bg-green-400/90 text-gray-950 hover:bg-transparent hover:text-green-400/90 border border-green-400/90 px-16 sm:px-20 py-2 rounded-lg font-medium text-sm xs:text-md lg:text-lg"
            >
                Register Now
            </a>
        </div>
    )
}

export default HeroAction
