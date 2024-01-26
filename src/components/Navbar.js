
import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, animate, stagger } from "framer-motion"
import Link from "next/link"
import { XIcon } from "lucide-react";

export default function Navbar() {

    useEffect(() => {
        if (typeof document !== 'undefined') {
            animate("li", { opacity: 1, y: 0 }, { delay: stagger(0.5, { from: 'end' }) });
        }
    }, []);

    const [isActive, setActive] = useState(false);

    return (
        <nav className={`sticky top-0 bg-slate-100 flex w-full lg:p-5 lg:px-10  justify-center border-b-2 z-50 overflow-hidden ${!isActive ? '' : ''}`}>
            <div className="container flex w-full lg:p-5 lg:px-10 justify-between z-50 ">
                <Link href="/" className="flex hover:scale-95 duration-500 w-fit items-center z-40">
                    <motion.img initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.2 }} whileTap={{ scale: 0.4 }} className=" duration-500 z-20 cursor-pointer" src={'/images/flor-da-vida.svg'} width={120} height={84} />
                    <p className="text-xl font-extrabold z-20">&quot;xyrlan&quot;</p>
                </Link>


                <Image width={50} height={12} alt="menu-icon"
                    onClick={() => {
                        setActive(isActive ? false : true);
                    }}
                    className={`sm:hidden block max-sm:mx-4 z-50 duration-200 transition-all ${!isActive ? 'opacity-100' : 'opacity-0 translate-x-14 right-0 top-4 absolute'} `} id="menu-icon" src="/images/menu-icon.svg" />

                <XIcon 
                onClick={() => {
                    setActive(isActive ? false : true);
                }}
                className={`h-auto w-12 sm:hidden max-sm:mx-4 z-50 duration-200 transition-all overflow-hidden ${isActive ? 'opacity-100' : 'opacity-0 translate-x-14 right-0 top-4 absolute'} `}/>

                {isActive && (
                    <motion.ul initial={{ height: 0 }} whileInView={{ height: '100%', opacity: 1 }} transition={{ duration: 1 }} className={`fixed bg-slate-100 w-full flex flex-col justify-start pt-32 items-center gap-10 z-30 top-0`}>
                        <motion.li initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                            <Link href="/"
                                onClick={() => { setActive(false) }}
                                className="text-5xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Home</Link>
                        </motion.li>

                        <motion.li initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
                            <Link href="/fullstack"
                                onClick={() => { setActive(false) }}
                                className="text-5xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Full-stack</Link>
                        </motion.li>
                        <motion.li initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.6 }}>
                            <Link href="/frontend"
                                onClick={() => { setActive(false) }}
                                className="text-5xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Front-end</Link>
                        </motion.li>

                    </motion.ul>
                )}

                <motion.ul className={`flex items-center justify-between gap-8 max-sm:hidden`}>

                    <motion.li initial={{ y: 300, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Link href="/" className="text-xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Home</Link>
                    </motion.li>

                    <motion.li initial={{ y: 300, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Link href="/fullstack" className="text-xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Full-stack</Link>
                    </motion.li>
                    <motion.li initial={{ y: 300, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Link href="/frontend" className="text-xl font-bold cursor-pointer hover:border-b-4 hover:text- hover:border-black duration-200">Front-end</Link>
                    </motion.li>
                </motion.ul>
            </div>
        </nav>
    )
}