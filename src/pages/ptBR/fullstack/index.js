import { motion } from "framer-motion"
import Image from "next/image"

const cards = [
  {
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/hg4pjudclbtzgb8xmsy9.jpg',
    title: 'Aplicativo Devlinks, replicação do Linktree',
    description: 'Aplicação Full Stack usando Nextjs (app router) + Prisma + NextAuth + PostgreSQL',
    href: 'https://link-sharing-app-ten.vercel.app',
  },
  {
    img: '/images/siteguine.png',
    title: 'Site/Blog Institucional - CECCIC',
    description: 'Aplicação Full Stack utilizando Nextjs integrada com Sanity, feita para um instituto na Guiné-Bissau.',
    href: 'https://ceccic.vercel.app',
  },
  {
    img: '/images/sitemeunu.png',
    title: 'Saas de cardápio digital e delivery - Meunu',
    description: 'Projeto pessoal com fins lucrativos. Aplicação Full Stack utilizando Nextjs, Prisma, NextAuth, Supabase.',
    href: 'https://www.meunu.com.br/',
  },
  {
    img: '/images/nihonproject.png',
    title: 'Nihon restaurante',
    description: 'Aplicação Full Stack utilizando Nextjs integrada com Sanity e emailJS, feita para um cliente.',
    href: 'https://www.nihonrestaurante.com.br',
  },
  {
    img: '/images/pesqueiro110folio.png',
    title: 'Pesqueiro 110',
    description: 'Aplicação Full Stack utilizando Nextjs integrada com Sanity, feita para um cliente.',
    href: 'https://www.pesqueiro110.com.br/',
  },
  {
    img: '/images/mosaicoproject.png',
    title: 'Mosaico Genética Médica',
    description: 'Aplicação Front End utilizando Nextjs e Framer Motion, feita para um cliente.',
    href: 'https://www.mosaico.med.br/'
  },
  {
    img: '/images/srv.png',
    title: 'SRV Empreendimentos',
    description : 'Aplicação Front End utilizando Nextjs 14, TailwindCSS e Framer Motion, feita para um cliente.',
    href: 'https://www.srvempreendimentos.com.br/'
  },
  {
    img: '/images/hookzpage.png',
    title: 'HookZ Dashboard',
    description: 'Um dashboard complexo construído com NextJS, React e TailwindCSS.',
    href: 'https://hookz-demo.vercel.app/',
  },
   {
    img: '/images/srvfoods.png',
    title: 'Hisa Distribuidora',
    description: 'Aplicação Full Stack utilizando using Nextjs, Sanity, TailwindCSS and Framer Motion, feita para um cliente.',
    href: 'https://www.comprecomhisa.com.br/',
  },
  {
    img: '/images/oab.png',
    title: 'OAB para todos',
    description: "Um site feito para a OAB DF, a maior organização de advogados do Brasil, com animações complexas e leves ao mesmo tempo.",
    href: 'https://www.oabdfparatodos.com.br/'
  }
]
const cardsReversed = cards.reverse()
export default function FullStackProjects() {
  return (
    <main className="px-20 max-lg:px-4">
      <div className="text-center my-3">
        <motion.h1 initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-semibold tracking-widest">PROJETOS</motion.h1>
      </div>
      <motion.div className='h-0 border border-black' initial={{ width: 0, opacity: 0 }} transition={{ duration: 2 }} animate={{ width: '100%', opacity: 1 }} />
      <motion.div initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-10 p-2 pb-14 mt-10">
        {cardsReversed.map((card, index) => (
          <div key={index} className=" group/image overflow-hidden border rounded flex flex-col justify-between shadow-md">
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
                    <div className='z-20 relative flex'>Visitar site <img className='ml-2 group-hover:fill-slate-100' src='/images/arrow.svg' /> </div>
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
