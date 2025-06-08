import infra from "../assets/infra.webp"
import techx from "../assets/techx.webp"
import poster from "../assets/poster.jpg"
import miniature from "../assets/miniature.png"
import hackathon from "../assets/hackathon.png"
import shortvideo from "../assets/shortvideo.jpg"
import robosoccer from "../assets/robosoccer.jpg"
import openscience from "../assets/openscience.jpg"

import EventCard from "./EventCard"

function Events() {
    const events = [
        {
            name: "Innovative Infrastructure Challenge",
            categories: ["Undergraduate", "Civil", "Architecture"],
            description:
                "Top teams will receive certificates and awards. Cash prize details will be disclosed soon.",
            docLink:
                "https://nec.edu.np/public/ingenium/assets/pdf/Innovative%20Infrastructure%20Challenge.pdf",
            imgSrc: infra,
        },
        {
            name: "Miniature Masterplan Challenge",
            categories: ["Undergraduate", "Architecture", "Civil"],
            description:
                "Top teams will receive certificates and awards. Cash prize details will be disclosed soon.",
            docLink:
                "https://nec.edu.np/public/ingenium/assets/pdf/Design%20&%20Build%20The%20Miniature%20Masterplan%20Challenge.pdf",
            imgSrc: miniature,
        },
        {
            name: "BotArena Robotics Innovation Show",
            categories: ["Undergraduate", "ELE & ELX", "CMP"],
            description:
                "Top teams will receive certificates and awards. Cash prize details will be disclosed soon.",
            docLink:
                "https://nec.edu.np/public/ingenium/assets/pdf/BotArena%20Robotics%20Innovation%20Show.pdf",
            imgSrc: robosoccer,
        },
        {
            name: "CodeSprint Hackathon",
            categories: ["Undergraduate", "CMP", "ELE & ELX"],
            description:
                "Top teams will receive certificates and awards. Cash prize details will be disclosed soon.",
            docLink:
                "https://nec.edu.np/public/ingenium/assets/pdf/CodeSprint%20Hackathon.pdf",
            imgSrc: hackathon,
        },
        {
            name: "TechX Innovation Fair",
            categories: ["Undergraduate", "CMP", "ELE & ELX"],
            description:
                "Top teams will receive certificates and awards. Cash prize details will be disclosed soon.",
            docLink:
                "https://nec.edu.np/public/ingenium/assets/pdf/TechX%20Innovation%20Fair.pdf",
            imgSrc: techx,
        },
        {
            name: "Poster Design Competition",
            categories: ["Undergraduate"],
            description:
                "Top teams will receive certificates and awards. Cash prize details will be disclosed soon.",
            docLink:
                "https://nec.edu.np/public/ingenium/assets/pdf/Poster%20Design%20Competition.pdf",
            imgSrc: poster,
        },
        {
            name: "Open Science Project Competition",
            categories: ["+2", "Diploma"],
            description:
                "Top teams will receive certificates and awards. Cash prize details will be disclosed soon.",
            docLink:
                "https://nec.edu.np/public/ingenium/assets/pdf/Open%20Science%20Project%20Competition.pdf",
            imgSrc: openscience,
        },
        {
            name: 'Short Video Challenge: "Engineer The Future"',
            categories: ["+2", "Diploma"],
            description:
                "Top teams will receive certificates and awards. Cash prize details will be disclosed soon.",
            docLink:
                "https://nec.edu.np/public/ingenium/assets/pdf/Short%20Video%20Challenge%20.pdf",
            imgSrc: shortvideo,
        },
    ]

    return (
        <section id="events" className="mt-8 md:mt-10">
            <h2 className="text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold">
                Events
            </h2>
            <div className="mt-4 flex flex-col gap-8">
                {events.map((event) => (
                    <EventCard key={event.name} event={event} />
                ))}
            </div>
        </section>
    )
}

export default Events
