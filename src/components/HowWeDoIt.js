import Image from "next/image"
import Line from '../../public/line.png'
const HowWeDoIt = () => {
    return (
        <nav className="flex items-center justify-center w-full h-full py-5">
            <Image
                src={Line}
                alt="Line"
                width="5"
                height="-2"
                className="cursor-pointer"
                priority
            />
        </nav>
    )
}

export default HowWeDoIt
