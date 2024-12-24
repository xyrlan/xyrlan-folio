import { motion } from "framer-motion"
import Image from "next/image"

const cards = [
  {
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/hg4pjudclbtzgb8xmsy9.jpg',
    title: 'Devlinks app',
    description: 'Full Stack aplication app using Nextjs(app router) + Prisma + NextAuth + PostgreSQL',
    href: 'https://link-sharing-app-ten.vercel.app',
},
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
  {
    img: '/images/pesqueiro110folio.png',
    title: 'Pesqueiro 110',
    description: 'Full Stack application using Nextjs integrated with Sanity, made for a customer.',
    href: 'https://www.pesqueiro110.com.br/',
  },
  {
    img: '/images/mosaicoproject.png',
    title: 'Mosaico Genética Médica',
    description: 'Front End application using Nextjs and Framer Motion, made for a customer.',
    href: 'https://www.mosaico.med.br/'
  },
  {
    img: '/images/srv.png',
    title: 'SRV Empreendimentos',
    description : 'Front End application using Nextjs 14, TailwindCSS and Framer Motion, made for a customer.',
    href: 'https://www.srvempreendimentos.com.br/'
  },
  {
    img: '/images/hookzpage.png',
    title: 'HookZ Dashboard',
    description: 'A complex dashboard built with NextJS, React, and TailwindCSS.',
    href: 'https://hookz-demo.vercel.app/',
  },
  {
    img: '/images/srvfoods.png',
    title: 'Hisa Distribuidora',
    description: 'Full Stack application using Nextjs, Sanity, TailwindCSS and Framer Motion, made for a customer.',
    href: 'https://www.comprecomhisa.com.br/',
  }
]
const cardsReversed = cards.reverse()
export default function FullStackProjects() {
  return (
    <main className="px-20 max-lg:px-4">
      <div className="text-center my-3">
        <motion.h1 initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-semibold tracking-widest">PROJECTS</motion.h1>
      </div>
      <motion.div className='h-0 border border-black' initial={{ width: 0, opacity: 0 }} transition={{ duration: 2 }} animate={{ width: '100%', opacity: 1 }} />
      <motion.div initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-10 p-2 pb-14 mt-10">
        {cardsReversed.map((card, index) => (
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
