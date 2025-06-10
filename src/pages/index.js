import Head from "next/head"
import { Inter } from "next/font/google"

import Nav from "../components/Nav"
import FAQ from "../components/FAQ"
import Hero from "../components/Hero"
import About from "../components/About"
import Events from "../components/Events"
import OrgCom from "../components/OrgCom"
import Contact from "../components/Contact"
import Container from "../components/Container"
import ParticlesCom from "../components/ParticlesCom"

const interFont = Inter({ subsets: ["latin"] })

export default function Home({ faqData, eventsData, orgMembersData }) {
    return (
        <>
            <Head>
                <title>necIngenium2025</title>
            </Head>
            <div
                className={`bg-gray-950 text-gray-400 relative z-20 overflow-x-hidden ${interFont.className}`}
            >
                <Nav />
                <Hero />
                <Container>
                    <ParticlesCom />
                    <About />
                    <Events eventsData={eventsData} />
                    <FAQ faqData={faqData} />
                    <OrgCom orgMembersData={orgMembersData} />
                </Container>
                <Contact />
            </div>
        </>
    )
}

export async function getStaticProps() {
    const eventsData = [
        {
            name: "One World: One Solution",
            categories: ["Undergraduate (1st and 2nd year)"],
            description:
                "Propose and present sensible and practical solutions for problems in specified topic domains. Requires slide preparation and defense.",
            docLink: "/docs/one-world-solution.pdf",
            imgSrc: "/oneworld.jpg",
            imgWidth: 1280,
            imgHeight: 720,
        },
        {
            name: "Innovative Infrastructure Challenge",
            categories: ["Undergraduate", "Civil", "Architecture"],
            description:
                "Design sustainable and inclusive infrastructure under specified themes. Requires physical models or CAD designs and posters.",
            docLink: "/docs/innovative-infrastructure.pdf",
            imgSrc: "/infra.webp",
            imgWidth: 445,
            imgHeight: 250,
        },
        {
            name: "Design & Build: Miniature Masterplan Challenge",
            categories: ["Undergraduate", "Architecture", "Civil"],
            description:
                "Create physical or 3D-printed models as solutions to real world infrastructure problems. Requires concept sheet with specified sections in addition.",
            docLink: "/docs/miniature-masterplan.pdf",
            imgSrc: "/miniature.png",
            imgWidth: 1000,
            imgHeight: 562,
        },
        {
            name: "BotArena: Robotics Innovation Show",
            categories: ["Undergraduate", "ELE & ELX", "CMP"],
            description:
                "Robotics competition to test programming and design skills. Requires participants' own kits with dimension and weight limits.",
            docLink: "/docs/botarena-robotics.pdf",
            imgSrc: "/robosoccer.jpg",
            imgWidth: 2048,
            imgHeight: 1152,
        },
        {
            name: "TechX Innovation Fair",
            categories: ["Undergraduate", "CMP", "ELE & ELX"],
            description:
                "Create software and hardware systems to solve problems under specified themes. Requires poster summarizing specified sections.",
            docLink: "/docs/techx-innovation.pdf",
            imgSrc: "/techx.webp",
            imgWidth: 549,
            imgHeight: 308,
        },
        {
            name: "Poster Design Competition",
            categories: ["Undergraduate"],
            description:
                "Design creative posters to convey ideas with visual design principles. Requires submission of A2-sized poster in high resolution PDF and image formats.",
            docLink: "/docs/poster-design.pdf",
            imgSrc: "/poster.jpg",
            imgWidth: 800,
            imgHeight: 450,
        },
        {
            name: "Open Science Project Competition",
            categories: ["+2", "Diploma"],
            description:
                "Create STEM model prototypes for practical applications using scientific principles. Requires interactive demo and presentation.",
            docLink: "/docs/open-science.pdf",
            imgSrc: "/openscience.jpg",
            imgWidth: 800,
            imgHeight: 450,
        },
        {
            name: "Short Video Challenge: Engineer The Future",
            categories: ["+2", "Diploma"],
            description:
                "Showcase creative videos of short length under specified themes for social media. Must be original with no AI generation.",
            docLink: "/docs/short-video.pdf",
            imgSrc: "/shortvideo.jpg",
            imgWidth: 1280,
            imgHeight: 720,
        },
    ]

    const orgMembersData = [
        {
            name: "Asst. Prof. Bishwadeep Mainaly",
            tel: "9844686688",
            mail: "bishwadeepm@nec.edu.np",
        },
        {
            name: "Asst. Prof. Deepesh Prakash Guragain",
            tel: "9841750242",
            mail: "deepeshpg@nec.edu.np",
        },
        {
            name: "Asst. Prof. Binay Kumar Sah",
            tel: "9843392148",
            mail: "binayks@nec.edu.np",
        },
        {
            name: "Asst. Prof. Rakshya Raimajhi",
            tel: "9851223699",
            mail: "rakshyar@nec.edu.np",
        },
        {
            name: "Asst. Prof. Kishor Dhungana",
            tel: "9851169526",
            mail: "kishord@nec.edu.np",
        },
        {
            name: "Asst. Prof. Rajiv Manandhar",
            tel: "9851242390",
            mail: "rajivm@nec.edu.np",
        },
        {
            name: "Asst. Prof. Basanta Pancha",
            tel: "9843500887",
            mail: "basantap@nec.edu.np",
        },
    ]

    const faqData = [
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
            answer: "The hackathon is time-bound with given theme whereas innovation fair entails exhibition/showcase of pre-developed projects. The hackathon will occur on July 01. The innovation fair will occur on main event day (July 03).",
        },
        {
            question:
                "Can I participate in both CodeSprint Hackathon and TechX Innovation Fair?",
            answer: "Yes. Participation in both these events is permitted.",
        },
    ]

    return {
        props: {
            faqData,
            eventsData,
            orgMembersData,
        },
    }
}
