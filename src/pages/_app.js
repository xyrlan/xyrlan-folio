import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavbarptBR from '@/components/Navbar-ptBR';

export default function App({ Component, pageProps }) {

  const [showScrollButton, setShowScrollButton] = useState(false);
  const [language, setLanguage] = useState()
  console.log(language)
  const router = useRouter()

  const pathname = router.pathname
  console.log(pathname)

  useEffect(() => {
    const langPath = language === 'ptbr' ? '/ptBR' : '';
    const currentPath = router.pathname;

    // Verificar se a rota atual começa com o caminho do idioma incorreto
    if (currentPath.startsWith('/ptBR') && language === 'en') {
      // Redirecione removendo o caminho do idioma incorreto
      router.replace(currentPath.replace('/ptBR', '/'));
    } else if (!currentPath.startsWith(langPath)) {
      // Se não começar, redirecione para a rota correta com base no idioma
      router.replace(`${langPath}${currentPath}`);
    }
  }, [language, router.pathname]);


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
        <title>xyrlan - Portfolio</title>
        <link rel="icon" href="/images/flor-da-vida.svg" type="image/x-icon"></link>
      </Head>
      <main
        className={`min-h-screen bg-slate-100`}
      >
        {
          pathname.startsWith('/ptBR') ? (
            <NavbarptBR setLanguage={setLanguage}/>
          ) : (
            <Navbar setLanguage={setLanguage}/>
          )
        }
        <Component {...pageProps} />
        <button
          className={`${showScrollButton ? 'fixed bottom-8 right-8' : 'hidden'
            } bg-slate text-white py-2 px-2 rounded-full shadow border border-black bg-opacity-50 bg-gray-200 duration-200`}
          onClick={handleScrollToTop}
        >
          <Image width={30} height={30} alt='arrowicon' src='/images/arrow-top.svg' />
        </button>
      </main>
    </>
  )
}
