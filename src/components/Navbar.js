import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="sticky bg-slate-100 flex lg:p-5 lg:px-10 max-lg:pr-5 justify-between z-50">
            <Link href="/" className="flex hover:scale-95 duration-500 w-fit items-center">
                <motion.img initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.2 }} className=" duration-500 z-0 cursor-pointer" src={'/images/flor-da-vida.svg'} width={120} height={84} />
                <p className="text-xl font-extrabold z-20">&quot;xyrlan&quot;</p>
            </Link>

            <div className="flex items-center justify-between gap-8">
                <Link href="/" className="text-xl font-bold cursor-pointer">Portfolio</Link>
                <Link href="/projects" className="text-xl font-bold cursor-pointer">Projects</Link>
                
            </div>
        </nav>
    )
}