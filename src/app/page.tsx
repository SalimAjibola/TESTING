import Image from "next/image";
import Navbar from '../components/Navbar';
import GotRugged from '../components/GotRugged'
import HowWeDoIt from '../components/HowWeDoIt'

export default function Home() {
  return (
    <>
    <Navbar />
    <GotRugged />
    <HowWeDoIt />
    </>
  );
}
