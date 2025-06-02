import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Container from "./components/Container"

function App() {
    return (
        <>
            <div className="bg-gray-950 text-gray-400 relative">
                <Nav />
                <Container>
                    <Hero />
                </Container>
            </div>
        </>
    )
}

export default App
