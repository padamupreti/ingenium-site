import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6"

function FAQCard({ faq }) {
    const [faqShown, setFaqShown] = useState(false)
    const { question, answer } = faq

    return (
        <div className="mt-4 p-2 xs:p-3 md:px-4 md:py-5 border border-white/15 rounded-xl">
            <div
                className="flex items-center justify-start space-x-2 cursor-pointer"
                onClick={() => setFaqShown(!faqShown)}
            >
                <span className="font-bold text-white text-lg md:text-xl">
                    {question}
                </span>
                <span className="text-teal-400/90">
                    {faqShown ? <FaAngleUp /> : <FaAngleDown />}
                </span>
            </div>
            <p className={faqShown ? "mt-4" : "hidden"}>{answer}</p>
        </div>
    )
}

export default FAQCard
