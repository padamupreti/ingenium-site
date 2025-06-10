import { useState } from "react"
import { useTimer } from "react-timer-hook"

function TimerCom({ title, expireTitle, expireDate, expiryTimestamp }) {
    const parts = expireDate.split(" ")

    const [expired, setExpired] = useState(false)
    const { minutes, hours, days } = useTimer({
        expiryTimestamp,
        onExpire: () => setExpired(true),
        interval: 20,
    })

    return (
        <div className="relative">
            <span className="absolute -z-20 text-gray-950 text-outline text-4xl sm:text-5xl -translate-y-2/3">
                {expireDate}
            </span>
            <div className="flex items-center space-x-5 bg-slate-100/5 backdrop-blur-xs px-2 sm:px-4 py-1 sm:py-2 border border-white/10 rounded-xl relative">
                <span className="absolute -top-4 -right-7 font-medium capitalize text-xs sm:text-sm px-2 py-1 bg-teal-400/90 text-gray-950 border rounded-full">
                    {expired ? expireTitle : title}
                </span>
                <span className="text-teal-400/90 font-bold text-center text-2xl xs:text-4xl pr-3 mr-3 border-r border-white/10">
                    {parts[0]}
                    <br />
                    {parts[1]}
                </span>
                <div className="font-medium text-center flex flex-col space-y-1">
                    <span className="text-3xl xs:text-5xl">
                        {days.toString().padStart(2, "0")}
                    </span>
                    <span className="text-teal-400/90 text-xs sm:text-sm uppercase">
                        Days
                    </span>
                </div>
                <div className="font-medium text-center flex flex-col space-y-1">
                    <span className="text-3xl xs:text-5xl">
                        {hours.toString().padStart(2, "0")}
                    </span>
                    <span className="text-teal-400/90 text-xs sm:text-sm uppercase">
                        Hours
                    </span>
                </div>
                <div className="font-medium text-center flex flex-col space-y-1">
                    <span className="text-3xl xs:text-5xl">
                        {minutes.toString().padStart(2, "0")}
                    </span>
                    <span className="text-teal-400/90 text-xs sm:text-sm uppercase">
                        Minutes
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TimerCom
