import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 500) { // Exibir o botão quando o scroll passar de 500px
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adiciona uma animação de scroll suave
    });
  };

  return (
    <>
      <Head>
        <title>xyrlan</title>
        <link rel="icon" href="/images/flor-da-vida.svg" type="image/x-icon"></link>
      </Head>
      <main
        className={`min-h-screen bg-slate-100`}
      >
        <Navbar />
        <Component {...pageProps} />
        <button
          className={`${showScrollButton ? 'fixed bottom-8 right-8' : 'hidden'
            } bg-slate text-white py-2 px-2 rounded-full shadow border border-black hover:bg-gray-200 duration-200`}
          onClick={handleScrollToTop}
        >
          <img src='/images/arrow-top.svg' />
        </button>
      </main>
    </>
  )
}
