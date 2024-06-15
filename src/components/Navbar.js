"use client"
import Image from "next/image"
import Logo from '../../public/image.png'
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose, AiOutlineDiscord, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { useState } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="w-full h-24 bg-gray-800">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href='/'>
          <Image
            src={Logo}
            alt="Logo"
            width="205"
            height="75"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href='/launch-app'>
              <li className="ml-5 uppercase hover:border-b text-sm font-bold">LAUNCH DAPP |</li>
            </Link>
            <Link href='/nft-portal'>
              <li className="ml-5 uppercase hover:border-b text-sm font-bold">NFT PORTAL |</li>
            </Link>
            <Link href='/futarchy'>
              <li className="ml-5 uppercase hover:border-b text-sm font-bold">FUTARCHY |</li>
            </Link>
            <Link href='/rug-bounty'>
              <li className="ml-5 uppercase hover:border-b text-sm font-bold">RUG BOUNTY</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-black p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href='/launch-app'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer">
                  LAUNCH DAPP
                </li>
              </Link>
              <Link href='/nft-portal'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer">
                  NFT PORTAL
                </li>
              </Link>
              <Link href='/futarchy'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer">
                  FUTARCHY
                </li>
              </Link>
              <Link href='/rug-bounty'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer">
                  RUG BOUNTY
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-row justify-around pt-10 items-center">
            <AiOutlineInstagram size={30} className="cursor-pointer" />
            <AiOutlineDiscord size={30} className="cursor-pointer" />
            <AiOutlineTwitter size={30} className="cursor-pointer" />
          </div>
          <Image
            src={Logo}
            alt="Logo"
            width="205"
            height="75"
            className="cursor-pointer pt-20"
            priority
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
