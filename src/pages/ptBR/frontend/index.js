import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import SocialBar from '@/components/social-bar'


export default function Projects() {

    const router = useRouter()
    return (
        <div className='flex max-lg:flex-col justify-between items-center w-full lg:py-12 lg:pr-12 max-lg:p-12 max-md:p-12 relative overflow-hidden'>
            <motion.img initial={{ opacity: 0 }} transition={{ duration: 2 }} animate={{ opacity: 0.1 }} className='absolute top-0 left-[30%] -rotate-90  scale-150 z-0 overflow-hidden max-w-full select-none' src='/images/bg-hero3-removebg-preview.png' />
            <motion.div initial={{ x: -600, opacity: 0 }} transition={{ duration: 1 }} animate={{ x: 0, opacity: 1 }} className=''>
                <h1 className='text-9xl font-bold text-black flex items-center max-lg:text-6xl max-md:text-4xl'>
                    <span className='bg-black text-slate-100 py-4 px-2 pl-24 w-fit z-10'>FRONT</span><motion.span initial={{ x: -300 }} animate={{ x: 0 }} transition={{ duration: 2 }} className=' z-0'>END</motion.span>
                </h1>
                <div className='md:pl-24 max-md:pl-12'>
                    <p className='text-3xl max-md:text-xl text-black mt-[10%] line max-sm:text-center'>
                        <span className='leading-loose'>Compilação de desafios de<br /></span>
                        <a className='cursor-pointer font-semibold text-black underline underline-offset-4' target="_blank" href="https://www.frontendmentor.io">frontendmentor.io</a>
                    </p>
                    <p className='text-3xl max-md:text-xl text-black my-[3%] max-lg:pb-8 max-sm:text-center'>
                        codificado por <motion.a className='cursor-pointer font-semibold text-black underline underline-offset-4' target='_blank' href='https://github.com/xyrlan'>xyrlan</motion.a>
                    </p>
                    <div className='pt-10'>
                        <SocialBar />
                    </div>
                </div>

            </motion.div>


            <div className='gap-2 flex'>

                <motion.div initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2 }}>

                    <motion.div initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 0.4 }} transition={{ duration: 1 }} whileHover={{ opacity: 1 }} className='' >
                        <Image src='/images/print.png' width={400} height={700} alt='' />
                    </motion.div>
                    <h1 className='text-3xl max-md:text-xl my-4 font-semibold'>Páginas</h1>
                    <p className='font-extralight mb-[4%]'>
                        Projetos com múltiplas páginas, página única<br /> aplicaçóes, componentes, landing pages e mais</p>

                    <a
                        href='/ptBR/frontend/projects'

                    >
                        <button className='text-xl font-semibold border-l-2 border-black group'>
                            <div className=" group-hover:text-slate-100 relative py-1 px-2">
                                <div className='z-20 relative flex'>Ir para seção <img className='ml-2 group-hover:fill-slate-100' src='/images/arrow.svg' /> </div>
                                <div className='group-hover:bg-black absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-300 z-0' />
                            </div>
                        </button>
                    </a>

                </motion.div>


                <motion.div initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 0.4 }} transition={{ duration: 1 }} whileHover={{ opacity: 1 }} className='max-sm:hidden'>
                    <Image src='https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/ypzzlv6wyvbsnvsqll9v.jpg' width={360} height={700} alt='' />
                </motion.div>


            </div>




        </div>
    )
}