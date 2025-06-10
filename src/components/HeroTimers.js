import TimerCom from "./TimerCom"

function HeroTimers() {
    const registerClosure = new Date(2025, 5, 28)
    const mainEventStart = new Date(2025, 6, 3, 9, 0, 0)

    console.log(`Registration by: ${registerClosure.toString()}`)
    console.log(`Main Event Date: ${mainEventStart.toString()}`)

    return (
        <div className="flex flex-col space-y-10 md:space-y-14 relative z-0">
            <div className="h-38 w-46 md:h-48 md:w-56 rounded-full bg-teal-400/10 blur-xl absolute -z-10 pointer-events-none top-0 -left-20"></div>
            <TimerCom
                title={"Registration Ends In"}
                expireTitle={"Registration Closed"}
                expireDate={"June 28"}
                expiryTimestamp={registerClosure}
            />
            <div className="bg-gradient-to-r from-transparent via-teal-400/90 to-transparent h-1 w-2/3 mx-auto -translate-y-2.5"></div>
            <TimerCom
                title={"Main Event Starts In"}
                expireTitle={"Main Event Started"}
                expireDate={"July 03"}
                expiryTimestamp={mainEventStart}
            />
        </div>
    )
}

export default HeroTimers
