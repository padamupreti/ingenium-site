import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Events from "./components/Events"
import Container from "./components/Container"

function App() {
    return (
        <>
            <div className="bg-gray-950 text-gray-400 relative">
                <Nav />
                <Hero />
                <Container>
                    <About />
                    <Events />
                </Container>
            </div>
        </>
    )
}

export default App
