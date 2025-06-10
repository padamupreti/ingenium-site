import Link from "next/link"
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
                <Link href={`tel:${tel}`} className="text-teal-400/90">
                    {tel}
                </Link>
            </div>
            <div className="flex items-center justify-start space-x-2">
                <span>
                    <FaEnvelope />
                </span>
                <Link href={`mailto:${mail}`} className="text-teal-400/90">
                    {mail}
                </Link>
            </div>
        </div>
    )
}

function OrgCom({ orgMembersData }) {
    return (
        <section id="org-com" className="mt-8 md:mt-10">
            <h2 className="text-teal-400/90 text-2xl md:text-3xl lg:text-4xl font-bold">
                Organizing Committee
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {orgMembersData.map((member) => (
                    <OrgCard key={member.name} member={member} />
                ))}
            </div>
        </section>
    )
}

export default OrgCom
