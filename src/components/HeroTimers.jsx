import TimerReg from "./TimerReg"
import TimerIngenium from "./TimerIngenium"

function HeroTimers() {
    return (
        <div className="py-8 md:py-16 flex flex-col space-y-8 relative z-0">
            <div className="h-38 w-46 md:h-48 md:w-56 rounded-full bg-green-400/10 blur-xl absolute -z-10 pointer-events-none top-0 -left-20"></div>
            <TimerReg />
            <div className="bg-gradient-to-r from-transparent via-green-400/90 to-transparent h-1 w-2/3 mx-auto"></div>
            <TimerIngenium />
        </div>
    )
}

export default HeroTimers
