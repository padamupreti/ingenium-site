import Link from "next/link"
import { FaPhone } from "react-icons/fa6"

function OrgCard({ member }) {
    const { name, tel } = member
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
        </div>
    )
}

export default OrgCard
