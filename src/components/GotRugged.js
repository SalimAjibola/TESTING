import Link from "next/link"
import Image from "next/image"
import Logo from '../../public/image-logo.png'
import Robot from '../../public/robot.png'

const GotRugged = () => {
    return (
        <nav className="w-full h-full bg-gray-800">
            <div>
                <ul className="flex-col py-5 sm:flex">
                    <Link href='/launch-app'>
                        <li className="ml-5 uppercase text-sm font-bold py-1">ABOUT US</li>
                    </Link>
                    <Link href='/nft-portal'>
                        <li className="ml-5 uppercase text-sm font-bold py-1">DOCUMENTS</li>
                    </Link>
                    <Link href='/futarchy'>
                        <li className="ml-5 uppercase text-sm font-bold py-1">TOKENOMICS</li>
                    </Link>
                    <Link href='/rug-bounty'>
                        <li className="ml-5 uppercase text-sm font-bold py-1">PODCAST</li>
                    </Link>
                </ul>
            </div>
            <div>
                <div className="flex items-center justify-center">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width="50"
                        height="75"
                        className="cursor-pointer"
                        priority
                    />
                </div>
                <h2 className="flex items-center justify-center text-white font-bold text-5xl">GOT RUGGED?</h2>
                <h2 className="flex items-center justify-center text-white font-semibold text-3xl pt-4 pb-10">RELAX</h2>
                <h2 className="flex items-center justify-center text-white font-semibold text-md">We take broken projects make them stronger, and return them to</h2>
                <h2 className="flex items-center justify-center text-white font-semibold text-md pb-5">their communites with little hassle so they can have a brighter future.</h2>
                <div className="flex items-center justify-center">
                    <Image
                        src={Robot}
                        alt="Logo"
                        width="250"
                        height="175"
                        className="cursor-pointer pb-10"
                        priority
                    />
                </div>
                <div className="flex items-center justify-center">
                    <div className="absolute bg-orange-500 text-md font-bold h-fit w-fit px-3 py-3 ">
                        <h1>TALK TO US (CONFIDENTIALLY)</h1>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default GotRugged
