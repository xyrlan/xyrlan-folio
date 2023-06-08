import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import SocialBar from '@/components/social-bar'
import animateWordChange from '@/components/wordAnimation'
import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()

  const wordList = ['Artist', 'Web Developer', 'Creative'];

  useEffect(() => {
    const cleanup = animateWordChange(wordList);

    return () => {
      cleanup();
    };
  }, []);

  return (

    <div className='flex flex-col w-full lg:py-24 lg:p-[12%] max-lg:p-20 max-md:p-12 max-sm:p-4 overflow-hidden'>

      <motion.img initial={{ opacity: 0 }} transition={{ duration: 2 }} animate={{ opacity: 0.15 }} className='select-none absolute right-0 top-0 z-0 w-[2000px] h-[500px] overflow-hidden' src='/images/bg-hero2-removebg-preview.png' />
      <section className='h-screen relative'>



        <motion.div initial={{ x: -600, opacity: 0 }} transition={{ duration: 1 }} animate={{ x: 0, opacity: 1 }} className='z-10'>
          <h1 className='text-9xl font-bold text-black flex items-center max-lg:text-6xl max-md:text-4xl'>
            <span className='bg-black text-slate-100 py-5 px-2 pl-24 w-fit z-10'>Pedro</span><motion.span initial={{ x: -380 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 2 }} className='ml-2 z-0'> xyrlan</motion.span>
          </h1>
        </motion.div>

        <div className='w-full flex max-md:flex-col items-center justify-between my-[10%]'>

          <motion.div className='h-0 border border-black' initial={{ width: 0, opacity: 0 }} transition={{ duration: 2 }} animate={{ width: '40%', opacity: 1 }} />
          {wordList.map((word, index) => (
            <motion.h1 key={index} initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className='word top-[30%] right-0 text-8xl font-semibold max-md:text-6xl max-sm:text-5xl max-md:right-auto'>{word}</motion.h1>
          ))}
        </div>

        <div className='max-md:mt-3 z-50'>
          <SocialBar />
        </div>

      </section>

      <section className='relative'>
        <motion.img initial={{ opacity: 0 }} transition={{ duration: 2 }} animate={{ opacity: 0.1 }} className='absolute -top-80 left-[30%] -rotate-45  scale-150 z-0 overflow-hidden select-none' src='/images/bg-hero1-removebg-preview.png' />
        <div>
          <h1 className='text-7xl font-bold '>About</h1>
          <motion.div className='h-0 border border-black mt-5' initial={{ width: 0, opacity: 0 }} transition={{ duration: 2 }} whileInView={{ width: '100%', opacity: 1 }} />
        </div>

        <div className='max-md:pb-10'>
          <motion.div initial={{ opacity: 0 }} transition={{ duration: 2 }} whileInView={{ opacity: 1 }} className='flex max-md:flex-col max-md:mt-10 items-center justify-between'>
            <p className='w-[50%] max-md:w-full text-xl font text-center'>
              I&apos;m Pedro, a web developer based in Brasilia/Brazil and specialised in front-end web development. However I am interested in learning and specializing in back-end as well. I am always open to learning new technologies, as I feel very accomplished in the area.
            </p>
            <div className='relative p-10 group'>
              <motion.img className='h-[400px] max-md:h-[300px] rounded-lg group-hover:contrast-75 duration-300' src='/images/Pedro-Xyrlan-foto-removebg-preview.png' />
              <motion.div className='absolute w-full h-full top-0 left-0 duration-700 to-slate-100 from-transparent bg-gradient-radial to-55% ' />
            </div>
          </motion.div>


          <motion.div initial={{ opacity: 0 }} transition={{ duration: 2 }} whileInView={{ opacity: 1 }} className='flex max-md:flex-col items-center justify-between max-md:gap-5'>

            <div className='flex max-md:flex-col justify-center items-center gap-4 max-md:gap-10 w-[50%] '>
              <div className='gap-4 flex md:flex-col'>
                <motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className='h-8' src='/images/react-logo-24.png' alt='react-logo' />
                <motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className='h-8' src='/images/tailwind-css-logo-24.png' alt='tailwind' />
                <motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className='h-8' src='/images/html5-logo-36.png' />
                <motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className='h-8' src='/images/css3-logo-36.png' />
              </div>
              <div className='gap-4 flex md:flex-col'>
                <motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className='h-8' src='/images/framermotion-icon.svg' />
                <motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className='h-8' src='/images/icon-ts.svg' />
                <motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className='h-8' src='/images/git-icon.svg' />
                <motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} className='h-8' src='/images/ts-icon.svg' />
              </div>
            </div>

            <p className='w-[50%] max-md:w-full text-xl font text-center'>
              I am experienced in using a wide range of modern technologies, including React JS, CSS, Tailwind CSS, HTML, Framer Motion, Node.js, TS and Git to build astonishing websites that look great in all devices.
            </p>
          </motion.div>

        </div>
      </section>



    </div>

  )
}
