import Head from "next/head"
import { Inter } from "next/font/google"

import Nav from "../components/Nav"
import FAQ from "../components/FAQ"
import Hero from "../components/Hero"
import About from "../components/About"
import Events from "../components/Events"
import Contact from "../components/Contact"
import Container from "../components/Container"
import ParticlesCom from "../components/ParticlesCom"
import BtnScrollTop from "../components/BtnScrollTop"

const interFont = Inter({ subsets: ["latin"] })

export default function Home({ faqData, eventsData }) {
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
                </Container>
                <Contact />
                <BtnScrollTop />
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
            member: { name: "MD Niyaj Ali", tel: "9702236740" },
            profMember: null,
        },
        {
            name: "Innovative Infrastructure Challenge",
            categories: ["Undergraduate"],
            description:
                "Design sustainable and inclusive infrastructure under specified themes. Requires physical models or CAD designs and posters.",
            docLink: "/docs/innovative-infrastructure.pdf",
            imgSrc: "/infra.webp",
            imgWidth: 445,
            imgHeight: 250,
            member: { name: "Rohan Shrestha", tel: "9840900052" },
            profMember: {
                name: "Asst. Prof. Binay Kumar Sah",
                tel: "9804844344",
            },
        },
        {
            name: "Design & Build: Miniature Masterplan Challenge",
            categories: ["Undergraduate"],
            description:
                "Create physical or 3D-printed models as solutions to real world infrastructure problems. Requires concept sheet with specified sections in addition.",
            docLink: "/docs/miniature-masterplan.pdf",
            imgSrc: "/miniature.png",
            imgWidth: 1000,
            imgHeight: 562,
            member: { name: "Gagan Simkhada", tel: "9866894004" },
            profMember: {
                name: "Asst. Prof. Rajiv Manandhar",
                tel: "9841493659",
            },
        },
        {
            name: "BotArena: Robotics Innovation Show",
            categories: ["Undergraduate"],
            description:
                "Robotics competition to test programming and design skills. Requires participants' own kits with dimension and weight limits.",
            docLink: "/docs/botarena-robotics.pdf",
            imgSrc: "/botarena.jpg",
            imgWidth: 1280,
            imgHeight: 720,
            member: { name: "Utsav Gautam", tel: "9748433357" },
            profMember: {
                name: "Asst. Prof. Deepesh Prakash Guragain",
                tel: "9841113139",
            },
        },
        {
            name: "TechX Innovation Fair",
            categories: ["Undergraduate"],
            description:
                "Create software and hardware systems to solve problems under specified themes. Requires poster summarizing specified sections.",
            docLink: "/docs/techx-innovation.pdf",
            imgSrc: "/techx.webp",
            imgWidth: 549,
            imgHeight: 308,
            member: { name: "Sujan Poudel", tel: "9845993344" },
            profMember: {
                name: "Asst. Prof. Basanta Pancha",
                tel: "9843500887",
            },
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
            member: { name: "Rohan Shrestha", tel: "9840900052" },
            profMember: {
                name: "Asst. Prof. Rakshya Raimajhi",
                tel: "9813824243",
            },
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
            member: { name: "Gagan Simkhada", tel: "9866894004" },
            profMember: {
                name: "Asst. Prof. Kishor Dhungana",
                tel: "9851149161",
            },
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
            member: { name: "Sulav Timilshina", tel: "9840052821" },
            profMember: {
                name: "Asst. Prof. Bishwadeep Mainaly",
                tel: "9844686688",
            },
        },
    ]

    const faqData = [
        {
            question: "Who can participate in nec Ingenium 2025?",
            answer: "Currently enrolled students from undergraduate, diploma and +2 levels can participate. Open Science Project and Short Video Challenge are +2 level only whereas the rest of the events are for undergraduate students from any program.",
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
        },
    }
}
