function Hero() {
    return (
        <section className="text-white flex flex-col justify-around items-center sm:items-baseline sm:flex-row relative">
            <div className="py-8 sm:py-16 flex flex-col space-y-1 md:space-y-2 lg:space-y-3 relative z-0">
                <div className="h-36 w-36 md:h-40 md:w-40 rounded-full bg-green-300/10 blur-xl absolute -z-10 pointer-events-none -top-10 sm:top-0 -left-20"></div>
                <div className="h-36 w-36 md:h-40 md:w-40 rounded-full bg-green-400/10 blur-xl absolute -z-10 pointer-events-none -bottom-10 sm:bottom-0 -right-10 sm:-right-20 md:-right-35"></div>
                <span className="font-extrabold text-4xl md:text-6xl lg:text-7xl italic">
                    nec
                </span>
                <span className="font-bold text-4xl md:text-6xl lg:text-7xl text-green-400/90">
                    Ingenium
                </span>
                <span className="font-bold text-4xl md:text-6xl lg:text-7xl">
                    2025
                </span>
                <span className="flex gap-1 uppercase text-xs md:text-sm">
                    <span>Code</span>
                    <span>·</span>
                    <span>Create</span>
                    <span>·</span>
                    <span>Elevate</span>
                </span>
                <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfBWibuZZO3q9MU_cUKa2ZEw4CCeu0n_MFO_yfkbJVAYNBnKQ/viewform"
                    className="w-fit mt-3 bg-green-400/90 text-gray-950 hover:bg-transparent hover:text-green-400/90 border border-green-400/90 px-12 md:px-20 py-2 rounded-lg font-medium lg:text-lg"
                >
                    Register Now
                </a>
            </div>
            <div className="py-8 sm:py-16 flex flex-col space-y-7 relative z-0">
                <div className="h-38 w-46 md:h-48 md:w-56 rounded-full bg-green-400/10 blur-xl absolute -z-10 pointer-events-none top-0 -left-20"></div>
                <div className="relative">
                    <span className="absolute -z-20 text-gray-950 text-outline text-5xl md:text-7xl -translate-y-1/2">
                        June 28
                    </span>
                    <div className="flex items-center space-x-5 bg-slate-100/10 backdrop-blur-xs p-4 border border-white/10 rounded-xl relative">
                        <span className="absolute -top-3 right-3 font-medium capitalize text-xs sm:text-sm px-2 py-1 bg-green-400/90 text-gray-950 border rounded-full">
                            Registration closes in
                        </span>
                        <span className="text-green-400/90 font-bold text-center text-2xl md:text-4xl lg:text-5xl pr-3 mr-3 border-r border-white/10">
                            June
                            <br />
                            28
                        </span>
                        <div className="font-medium text-center flex flex-col space-y-1">
                            <span className="text-3xl md:text-5xl lg:text-6xl">
                                19
                            </span>
                            <span className="text-green-400/90 text-xs sm:text-sm uppercase">
                                Days
                            </span>
                        </div>
                        <div className="font-medium text-center flex flex-col space-y-1">
                            <span className="text-3xl md:text-5xl lg:text-6xl">
                                22
                            </span>
                            <span className="text-green-400/90 text-xs sm:text-sm uppercase">
                                Hours
                            </span>
                        </div>
                        <div className="font-medium text-center flex flex-col space-y-1">
                            <span className="text-3xl md:text-5xl lg:text-6xl">
                                16
                            </span>
                            <span className="text-green-400/90 text-xs sm:text-sm uppercase">
                                Minutes
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-green-400/90 h-1 w-2/3 mx-auto rounded-full"></div>
                <div className="relative">
                    <span className="absolute -z-20 text-gray-950 text-outline text-5xl md:text-7xl bottom-0 right-0 translate-y-1/2">
                        July 02
                    </span>
                    <div className="flex items-center space-x-5 bg-slate-100/10 backdrop-blur-xs p-4 border border-white/10 rounded-xl relative">
                        <span className="absolute -top-3 right-3 font-medium capitalize text-xs sm:text-sm px-2 py-1 bg-green-400/90 text-gray-950 border rounded-full">
                            Ingenium starts in
                        </span>
                        <span className="text-green-400/90 font-bold text-center text-2xl md:text-4xl lg:text-5xl pr-3 mr-3 border-r border-white/10">
                            July
                            <br />
                            02
                        </span>
                        <div className="font-medium text-center flex flex-col space-y-1">
                            <span className="text-3xl md:text-5xl lg:text-6xl">
                                23
                            </span>
                            <span className="text-green-400/90 text-xs sm:text-sm uppercase">
                                Days
                            </span>
                        </div>
                        <div className="font-medium text-center flex flex-col space-y-1">
                            <span className="text-3xl md:text-5xl lg:text-6xl">
                                30
                            </span>
                            <span className="text-green-400/90 text-xs sm:text-sm uppercase">
                                Hours
                            </span>
                        </div>
                        <div className="font-medium text-center flex flex-col space-y-1">
                            <span className="text-3xl md:text-5xl lg:text-6xl">
                                46
                            </span>
                            <span className="text-green-400/90 text-xs sm:text-sm uppercase">
                                Minutes
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
