import TimerReg from "./TimerReg"
import TimerIngenium from "./TimerIngenium"

function HeroTimers() {
    return (
        <div className="py-8 md:py-18 lg:py-25 flex flex-col space-y-12 relative z-0">
            <div className="h-38 w-46 md:h-48 md:w-56 rounded-full bg-teal-400/10 blur-xl absolute -z-10 pointer-events-none top-0 -left-20"></div>
            <TimerReg />
            <div className="bg-gradient-to-r from-transparent via-teal-400/90 to-transparent h-1 w-2/3 mx-auto -translate-y-2.5"></div>
            <TimerIngenium />
        </div>
    )
}

export default HeroTimers
