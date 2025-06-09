import HeroAction from "./HeroAction"
import HeroTimers from "./HeroTimers"

function Hero() {
    return (
        <section
            id="register"
            className="bg-gray-950/60 text-white flex flex-col justify-evenly items-start px-6 xs:px-8 sm:px-10 md:items-baseline md:flex-row relative"
        >
            <HeroAction />
            <HeroTimers />
        </section>
    )
}

export default Hero
