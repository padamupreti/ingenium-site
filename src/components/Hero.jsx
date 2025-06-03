import HeroAction from "./HeroAction"
import HeroTimers from "./HeroTimers"

function Hero() {
    return (
        <section className="text-white flex flex-col justify-around items-start sm:items-baseline md:flex-row relative">
            <HeroAction />
            <HeroTimers />
        </section>
    )
}

export default Hero
