import { useEffect, useState } from "react"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"

function BtnScrollTop() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => setIsVisible(window.scrollY > 0)
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <div
            onClick={scrollToTop}
            className={`${
                isVisible ? "h-12 w-12 lg:h-16 lg:w-16" : "h-0 w-0"
            } bg-teal-400/85 hover:bg-teal-400/90 rounded-full text-gray-950 text-2xl cursor-pointer fixed bottom-6 right-6 md:bottom-8 md:right-8 grid place-items-center transition-all`}
        >
            <MdKeyboardDoubleArrowUp />
        </div>
    )
}

export default BtnScrollTop
