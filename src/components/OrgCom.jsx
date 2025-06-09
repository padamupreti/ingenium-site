import { FaEnvelope, FaPhone } from "react-icons/fa6"

function OrgCard({ member }) {
    const { name, tel, mail } = member
    return (
        <div className="flex flex-col space-y-0.5">
            <h3 className="text-white font-bold">{name}</h3>
            <div className="flex items-center justify-start space-x-2">
                <span>
                    <FaPhone />
                </span>
                <a href={`tel:${tel}`} className="text-teal-400/90">
                    {tel}
                </a>
            </div>
            <div className="flex items-center justify-start space-x-2">
                <span>
                    <FaEnvelope />
                </span>
                <a href={`mailto:${mail}`} className="text-teal-400/90">
                    {mail}
                </a>
            </div>
        </div>
    )
}

function OrgCom() {
    const orgMembers = [
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
    return (
        <section id="org-com" className="mt-8 md:mt-10">
            <h2 className="text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold">
                Organizing Committee
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {orgMembers.map((member) => (
                    <OrgCard key={member.name} member={member} />
                ))}
            </div>
        </section>
    )
}

export default OrgCom
