import visitors from "../assets/visitors.jpg"

function About() {
    return (
        <section
            id="about"
            className="mt-8 md:mt-10 flex flex-col gap-8 md:flex-row items-center"
        >
            <div className="md:w-1/2">
                <h2 className="text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold">
                    About
                </h2>
                <p className="mt-4 text-justify">
                    <span className="font-extrabold italic">nec</span> Ingenium
                    2025 is a showcase of creativity, innovation, and ingenuity
                    at Nepal Engineering College (
                    <span className="font-extrabold italic">nec</span>) aiming
                    to present an array of remarkable projects from disciplines
                    of science, engineering and architecture that embody the
                    collective brilliance of talented individuals and visionary
                    groups.
                </p>
                <p className="mt-4 text-justify">
                    <span className="font-extrabold italic">nec</span> was
                    established in 1994 as a not-for-profit social academic
                    institute and is an ISO certified college making quality
                    technical education accessible and affordable to the masses.
                    At present there are 2000+ students pursuing undergraduate
                    and graduate degrees in engineering and architecture.{" "}
                    <span className="font-extrabold italic">nec</span> is
                    committed to retaining its long earned reputation of "an
                    institution with concerns for quality and academic freedom".{" "}
                </p>
            </div>
            <div className="md:w-1/2">
                <img
                    src={visitors}
                    alt="Ingenium Visitors"
                    className="rounded-xl md:w-11/12 md:mx-auto lg:w-10/12"
                />
            </div>
        </section>
    )
}

export default About
