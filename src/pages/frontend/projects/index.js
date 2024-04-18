import { motion } from "framer-motion"

const cards = [

    {
        img: '/images/poke-next-print.PNG',
        title: 'PokeDex Page using Pokemon API',
        description: 'This multi-page pokemon web application utilizes JSON data, API requisition ,dynamic routing, state management and search functionality.',
        href: 'https://poke-next-eosin.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/qhex5aspdyg8u5j1yklg.jpg',
        title: 'Entertainment Page with TMDB API',
        description: 'This multi-page entertainment web application utilizes JSON data, API requisition, dynamic routing, state management and search functionality.',
        href: 'https://entertainment-web-app-git-tmdb-movies-xyrlan.vercel.app',

    },

    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/zurpxclpp6gavavnw6d2.jpg',
        title: 'Entertainment Page',
        description: 'This multi-page entertainment web application utilizes JSON data, routing, state management and search functionality.',
        href: 'https://entertainment-web-app-flame.vercel.app',

    },
        {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/tvmugy6f5mjdfn8nmy1l.jpg',
        title: 'App Clock',
        description: 'Responsive page that shows the local time and gets the timezone based on the IP, using 3 API requests, and animated with FramerMotion.',
        href: 'https://clock-app-xyrlan.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/x8skdsukkmwiwxejthio.jpg',
        title: 'Space tourism multi-page website',
        description: 'Responsive homepage built with Tailwind CSS,, including Image gallery with slider function and mobile toggle navbar menu',
        href: 'https://space-tourism-website-main-six.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vxqbpnpbamodg5ioplbj.jpg',
        title: 'Multi-step form',
        description: 'Modern, fully responsive multi-step form with form validation and state management using React JS.',
        href: 'https://multiform-challenge-xyrlan.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/hkmsdxxteijprjdzskhg.jpg',
        title: 'Notifications page',
        description: 'Smoothly Animated Notification list, fetching data dynamically from JSON, which is hosted online. Images are hosted on Cloudinary.',
        href: 'https://xyrlan.github.io/notifications-page-main--challenges/',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ydwlkxtdt2ocf5lfr8gf.jpg',
        title: 'News homepage',
        description: 'Multi-sectioned News Landing page, optimized responsive view for tablet and mobile devices as well.',
        href: 'https://xyrlan.github.io/news-homepage-main---challenge/',

    },
        {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/sr9i7z9p1tfb2m40pigu.jpg',
        title: 'NFT preview card',
        description: 'Personalized Card Component with Flexbox CSS and Hover Effects.',
        href: 'https://nft-preview-card-xyrlan.vercel.app',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/l0nkljeqewyxuw0vedhd.jpg',
        title: 'Advice generator app',
        description: 'Fetching JSON Data from from the Advice Slip API to generate random quotes of advice.',
        href: 'https://xyrlan.github.io/challenges-advice-generator-app/',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/mviyrgajwlwuawauzgb8.jpg',
        title: 'Results summary component',
        description: 'Animated results summary component with data fetching from external server.',
        href: 'https://xyrlan.github.io/challenge---results-summary-component/',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/d0bm3lh8bp36gyi3jiop.jpg',
        title: 'Product preview card component',
        description: 'Responsive Product component, built with CSS Flexbox.',
        href: 'https://xyrlan.github.io/html-css-challenge-shop/',

    },
    {
        img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/cybxdhr4wewlscvco9dd.jpg',
        title: 'QR code component',
        description: 'Minimal yet clean QR card with CSS Flexbox.',
        href: 'https://xyrlan.github.io/qr-code-component-main-challenge/',

    },
]

export default function Pages() {
    return (
        <main className="px-20 max-lg:px-4">
            <div className="text-center my-3">
                <motion.h1 initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-semibold tracking-widest">PAGES</motion.h1>
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
