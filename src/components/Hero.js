import HeroAction from "./HeroAction"
import HeroTimers from "./HeroTimers"

function Hero() {
    return (
        <section
            id="register"
            className="bg-gray-950/60 text-white flex flex-col gap-16 justify-evenly items-start pt-12 md:pt-0 xl:pt-20 xl:pb-14 px-6 xs:px-8 sm:px-10 md:items-center md:flex-row relative max-xl:min-h-dvh"
        >
            <HeroAction />
            <HeroTimers />
        </section>
    )
}

export default Hero
