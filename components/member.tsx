import React from "react"
import Image from "next/image"
import Link from "next/link"

interface Props {
    id: string
    name: string
    socialId: string
    link: string
}

const Member: React.FC<Props> = ({ id, name, socialId, link}) => (
    <div>
        <Image
        src={`/Avatars/${id}.png`}
        alt={name}
        width={250}
        height={250}
        />
        <div className="text-2xl xl:text-3xl">{name}</div>
        <div className="text-xl"></div>
    </div>
)

export default Member