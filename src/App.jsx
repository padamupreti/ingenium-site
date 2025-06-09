import Nav from "./components/Nav"
import FAQ from "./components/FAQ"
import Hero from "./components/Hero"
import About from "./components/About"
import Events from "./components/Events"
import OrgCom from "./components/OrgCom"
import Contact from "./components/Contact"
import Container from "./components/Container"

function App() {
    return (
        <>
            <div className="bg-gray-950 text-gray-400 font-inter relative">
                <Nav />
                <Hero />
                <Container>
                    <About />
                    <Events />
                    <FAQ />
                    <OrgCom />
                </Container>
                <Contact />
            </div>
        </>
    )
}

export default App
