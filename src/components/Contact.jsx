import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLocationDot,
    FaPhone,
    FaRegCopyright,
} from "react-icons/fa6"

function Contact() {
    return (
        <section id="contact" className="mt-8 md:mt-10 bg-gray-900 p-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col space-y-2.5 md:w-fit md:mx-auto">
                    <h2 className="font-robotoslab font-bold text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-12 lg:leading-16">
                        <span className="text-white font-extrabold italic">
                            nec
                        </span>{" "}
                        <span className="bg-gradient-to-r from-indigo-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                            Ingenium
                        </span>
                    </h2>
                    <span className="text-white flex gap-1 uppercase text-xs xs:text-sm">
                        <span>Code</span>
                        <span>·</span>
                        <span>Create</span>
                        <span>·</span>
                        <span>Elevate</span>
                    </span>
                    <h2 className="mt-4 text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold">
                        Find Us On
                    </h2>
                    <a
                        href="#"
                        target="_blank"
                        className="text-white hover:text-teal-400/90"
                    >
                        <span className="flex items-center space-x-2 text-lg md:text-xl">
                            <FaFacebook />
                            <span>Facebook</span>
                        </span>
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="text-white hover:text-teal-400/90"
                    >
                        <span className="flex items-center space-x-2 text-lg md:text-xl">
                            <FaInstagram />
                            <span>Instagram</span>
                        </span>
                    </a>
                </div>
                <div className="md:w-fit md:mx-auto">
                    <h2 className="text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                        Contact Us
                    </h2>
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2055990034137!2d85.41303567430639!3d27.710937625335237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b1fed5126c5%3A0x66a89bde8e23a65e!2sNepal%20Engineering%20College!5e0!3m2!1sen!2snp!4v1749468522077!5m2!1sen!2snp"
                            className="border-0 h-60 w-64"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="flex flex-col space-y-2.5">
                            <p className="flex items-center space-x-2">
                                <FaLocationDot />
                                <a href="https://maps.app.goo.gl/6ZhyV4KBDBC6sC7UA">
                                    Changunarayan, Bhaktapur
                                </a>
                            </p>
                            <p className="flex items-center space-x-2">
                                <FaPhone />
                                <a
                                    href="tel:9844686688"
                                    className="text-teal-400/90"
                                >
                                    9844686688
                                </a>
                            </p>
                            <p className="flex items-center space-x-2">
                                <FaEnvelope />
                                <a
                                    href="mailto:ingenium@nec.edu.np"
                                    className="text-teal-400/90"
                                >
                                    ingenium@nec.edu.np
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-8 text-xs md:text-sm text-center text-gray-400/80">
                <FaRegCopyright className="inline-block" /> 2025 Nepal
                Engineering College. All Rights Reserved.
            </p>
        </section>
    )
}

export default Contact
