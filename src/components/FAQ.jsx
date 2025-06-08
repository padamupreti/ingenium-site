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

function FAQ() {
    const faq = [
        {
            question: "Who can participate in nec Ingenium 2025?",
            answer: "Currently enrolled students from +2 and undergraduate levels can participate. Open Science Project and Short Video Challenge are +2 level only whereas the rest of the events are for undergraduate students from any program.",
        },
        {
            question: "Is there a registration fee?",
            answer: "No. All events in nec Ingenium 2025 are free to register.",
        },
        {
            question:
                "What is the difference between CodeSprint Hackathon and TechX Innovation Fair?",
            answer: "The hackathon is time-bound with given theme whereas innovation fair entails exhibition/showcase of pre-developed projects. The hackathon will occur on June 30 and July 01. The innovation fair will occur on main event day (July 03).",
        },
        {
            question:
                "Can I participate in both CodeSprint Hackathon and TechX Innovation Fair?",
            answer: "Yes. Participation in both these events is permitted.",
        },
    ]
    return (
        <section id="faq" className="mt-8 md:mt-10 pb-10">
            <h2 className="text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold">
                FAQ
            </h2>
            {faq.map((item) => (
                <FAQCard key={item.question} faq={item} />
            ))}
        </section>
    )
}

export default FAQ
