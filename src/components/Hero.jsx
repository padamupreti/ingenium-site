import HeroAction from "./HeroAction"
import HeroTimers from "./HeroTimers"

function Hero() {
    return (
        <section
            id="register"
            className="text-white flex flex-col justify-evenly items-start mx-6 xs:mx-8 sm:mx-10 md:items-baseline md:flex-row relative"
        >
            <HeroAction />
            <HeroTimers />
        </section>
    )
}

export default Hero
