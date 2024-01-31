import { motion } from "framer-motion"

const cards = [
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/hg4pjudclbtzgb8xmsy9.jpg',
        title: 'Aplicativo Devlinks, replicação do Linktree',
        description: 'Aplicação Full Stack usando Nextjs (app router) + Prisma + NextAuth + PostgreSQL',
        href: 'https://link-sharing-app-ten.vercel.app',
    },
    {
        img: '/images/poke-next-print.PNG',
        title: 'Página PokeDex usando API Pokémon',
        description: 'Este aplicativo da web Pokémon de várias páginas utiliza dados JSON, requisição de API, roteamento dinâmico, gerenciamento de estado e funcionalidade de pesquisa.',
        href: 'https://poke-next-eosin.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/qhex5aspdyg8u5j1yklg.jpg',
        title: 'Página de entretenimento com API TMDB',
        description: 'Este aplicativo da web de entretenimento de várias páginas utiliza dados JSON, requisição de API, roteamento dinâmico, gerenciamento de estado e funcionalidade de pesquisa.',
        href: 'https://entertainment-web-app-git-tmdb-movies-xyrlan.vercel.app',

    },

    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/zurpxclpp6gavavnw6d2.jpg',
        title: 'Página de entretenimento',
        description: 'Este aplicativo da web de entretenimento de várias páginas utiliza dados JSON, roteamento, gerenciamento de estado e funcionalidade de pesquisa.',
        href: 'https://entertainment-web-app-flame.vercel.app',

    },
        {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/tvmugy6f5mjdfn8nmy1l.jpg',
        title: 'Relógio com fuso e localização ',
        description: 'Página responsiva que mostra a hora local e obtém o fuso horário com base no IP, usando 3 solicitações de API e animada com FramerMotion.',
        href: 'https://clock-app-xyrlan.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/x8skdsukkmwiwxejthio.jpg',
        title: 'Landing page de turismo espacial',
        description: 'Página inicial responsiva construída com Tailwind CSS, incluindo galeria de imagens com função de controle deslizante e menu de alternância da barra de navegação móvel',
        href: 'https://space-tourism-website-main-six.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vxqbpnpbamodg5ioplbj.jpg',
        title: 'Formulário de várias etapas',
        description: 'Formulário de várias etapas moderno e totalmente responsivo com validação de formulário e gerenciamento de estado usando React JS.',
        href: 'https://multiform-challenge-xyrlan.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/hkmsdxxteijprjdzskhg.jpg',
        title: 'Página de notificações',
        description: 'Lista de notificações suavemente animada, buscando dados dinamicamente do JSON, que está hospedado online. As imagens são hospedadas no Cloudinary.',
        href: 'https://xyrlan.github.io/notifications-page-main--challenges/',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ydwlkxtdt2ocf5lfr8gf.jpg',
        title: 'Página inicial de notícias',
        description: 'Página inicial de notícias com várias seções, visualização responsiva otimizada também para tablets e dispositivos móveis.',
        href: 'https://xyrlan.github.io/news-homepage-main---challenge/',

    },
        {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/sr9i7z9p1tfb2m40pigu.jpg',
        title: 'Cartão de visualização NFT',
        description: 'Componente de cartão personalizado com Flexbox CSS e efeitos de foco.',
        href: 'https://nft-preview-card-xyrlan.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/l0nkljeqewyxuw0vedhd.jpg',
        title: 'Aplicativo gerador de conselhos',
        description: 'Buscando dados JSON da API Advice Slip para gerar citações aleatórias de conselhos.',
        href: 'https://xyrlan.github.io/challenges-advice-generator-app/',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/mviyrgajwlwuawauzgb8.jpg',
        title: 'Componente de resumo de resultados',
        description: 'Componente de resumo de resultados animados com busca de dados de servidor externo.',
        href: 'https://xyrlan.github.io/challenge---results-summary-component/',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/d0bm3lh8bp36gyi3jiop.jpg',
        title: 'Componente do cartão de visualização do produto',
        description: 'Componente de produto responsivo, construído com CSS Flexbox.',
        href: 'https://xyrlan.github.io/html-css-challenge-shop/',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/cybxdhr4wewlscvco9dd.jpg',
        title: 'Componente de código QR (Meu primeiro projeto)!',
        description: 'Cartão QR mínimo, mas limpo, com CSS Flexbox.',
        href: 'https://xyrlan.github.io/qr-code-component-main-challenge/',

    },
]

export default function Pages() {
    return (
        <main className="px-20 max-lg:px-4">
            <div className="text-center my-3">
                <motion.h1 initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-semibold tracking-widest">PÁGINAS</motion.h1>
            </div>
            <motion.div className='h-0 border border-black' initial={{ width: 0, opacity: 0 }} transition={{ duration: 2 }} animate={{ width: '100%', opacity: 1 }} />
            <motion.div initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className="grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-10 p-2 pb-14 mt-10">
                {cards.map((card, index) => (
                    <div key={index} className=" group/image overflow-hidden border rounded flex flex-col justify-between shadow-md">
                        <img className="group-hover/image:scale-110 duration-200 " src={card.img} />

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
