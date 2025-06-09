import { useEffect, useState } from "react"
import { loadSlim } from "@tsparticles/slim"
import Particles, { initParticlesEngine } from "@tsparticles/react"

function ParticlesCom() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = (container) => {
        console.log(container)
    }

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        fullScreen: {
                            zIndex: -1,
                        },
                        fpsLimit: 120,
                        particles: {
                            color: {
                                value: "#00bba7",
                            },
                            links: {
                                color: "#00bba7",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1.5,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 65,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: {
                                    min: 1,
                                    max: 5,
                                },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    )
}

export default ParticlesCom
