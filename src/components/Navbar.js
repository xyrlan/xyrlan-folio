
import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, animate, stagger } from "framer-motion"
import Link from "next/link"

export default function Navbar() {

    useEffect(() => {
        if (typeof document !== 'undefined') {
            animate("li", { opacity: 1, y: 0 }, { delay: stagger(0.5, { from: 'end' }) });
        }
    }, []);

    const [isActive, setActive] = useState(false);

    return (
        <nav className={`sticky top-0 bg-slate-100 flex w-full lg:p-5 lg:px-10 max-lg:pr-5 justify-between z-50 ${!isActive ? '' : ''}`}>
            <Link href="/" className="flex hover:scale-95 duration-500 w-fit items-center">
                <motion.img initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.2 }} className=" duration-500 z-20 cursor-pointer" src={'/images/flor-da-vida.svg'} width={120} height={84} />
                <p className="text-xl font-extrabold z-20">&quot;xyrlan&quot;</p>
            </Link>


            <Image width={50} height={12} alt="menu-icon"
                onClick={() => {
                    setActive(isActive ? false : true);
                    console.log(isActive);
                }}
                className={`sm:hidden block max-sm:mx-4 z-50 ${!isActive ? '' : ''} `} id="menu-icon" src="/images/menu-icon.svg" />

            {isActive && (
                <ul className="fixed bg-slate-100 h-full w-full flex flex-col justify-center items-center gap-10">
                    <motion.li initial={{ y: 300, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                        <Link href="/" 
                         onClick={() => {setActive(false)}} 
                         className="text-5xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Portfolio</Link>
                    </motion.li>

                    <motion.li initial={{ y: 300, opacity: 1 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }}>
                        <Link href="/projects" 
                        onClick={() => {setActive(false)}}
                        className="text-5xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Projects</Link>
                    </motion.li>

                </ul>
            )}


            <motion.ul className={`flex items-center justify-between gap-8 max-sm:hidden`}>

                <motion.li initial={{ y: 300, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Link href="/" className="text-xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Portfolio</Link>
                </motion.li>

                <motion.li initial={{ y: 300, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Link href="/projects" className="text-xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Projects</Link>
                </motion.li>
            </motion.ul>
        </nav>
    )
}