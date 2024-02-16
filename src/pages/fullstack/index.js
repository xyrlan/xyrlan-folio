import { motion } from "framer-motion"
import Image from "next/image"

const cards = [
  {
    img: '/images/siteguine.png',
    title: 'Institucional Site/Blog - CECCIC',
    description: 'Full Stack application using Nextjs integrated with Sanity, made for an institute in Guinea-Bissau.',
    href: 'https://ceccic.vercel.app',
  },
  {
    img: '/images/sitemeunu.png',
    title: 'Saas for digital menu and delivery - Meunu',
    description: 'Personal project for profit. Full Stack application using Nextjs, Prisma, NextAuth, Supabase.',
    href: 'https://www.meunu.com.br/',
  },
  {
    img: '/images/nihonproject.png',
    title: 'Nihon restaurant',
    description: 'Full Stack application for and customer using Nextjs integrated with Sanity and EmailJS',
    href: 'https://www.nihonrestaurante.com.br',
  },
]

export default function FullStackProjects() {
  return (
    <main className="px-20 max-lg:px-4">
      <div className="text-center my-3">
        <motion.h1 initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-semibold tracking-widest">PROJECTS</motion.h1>
      </div>
      <motion.div className='h-0 border border-black' initial={{ width: 0, opacity: 0 }} transition={{ duration: 2 }} animate={{ width: '100%', opacity: 1 }} />
      <motion.div initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-10 p-2 pb-14 mt-10">
        {cards.map((card, index) => (
          <div key={index} className=" group/image overflow-hidden border rounded flex flex-col justify-between shadow-md  ">
            <Image width={300} height={300} className="group-hover/image:scale-110 duration-200 w-full h-56 object-cover" src={card.img} alt="" />
            <div className="p-4">
              <h1 className="mb-5 font-bold text-xl">{card.title}</h1>
              <p className="text-sm font-extralight mb-5">{card.description}</p>


              <button

                className='text-lg font-semibold border-l-2 border-black group'
              >
                <a
                  target="_blank"
                  href={card.href}>
                  <div className=" group-hover:text-slate-100 relative py-1 px-2">
                    <div className='z-20 relative flex'>Go to section <img className='ml-2 group-hover:fill-slate-100' src='/images/arrow.svg' /> </div>
                    <div className='group-hover:bg-black absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-300 z-0' />
                  </div>
                </a>
              </button>
            </div>
          </div>
        ))}

      </motion.div>

    </main>
  )
} 
