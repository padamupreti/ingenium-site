import EventCard from "./EventCard"
import HackathonCard from "./HackathonCard"

function Events({ eventsData }) {
    return (
        <section id="events" className="mt-8 md:mt-10">
            <h2 className="text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold">
                Events
            </h2>
            <p className="mt-4 text-justify">
                Top teams will receive certificates and awards. Cash prize
                details will be disclosed soon.
            </p>
            <div className="mt-4 flex flex-col gap-8">
                <HackathonCard />
                {eventsData.map((event) => (
                    <EventCard key={event.name} event={event} />
                ))}
            </div>
        </section>
    )
}

export default Events
