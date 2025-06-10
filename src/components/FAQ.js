import FAQCard from "./FAQCard"

function FAQ({ faqData }) {
    return (
        <section id="faq" className="mt-8 md:mt-10">
            <h2 className="text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold">
                FAQ
            </h2>
            {faqData.map((item) => (
                <FAQCard key={item.question} faq={item} />
            ))}
        </section>
    )
}

export default FAQ
