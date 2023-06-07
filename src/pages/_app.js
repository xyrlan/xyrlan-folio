import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>xyrlan</title>
      </Head>
      <main
        className={`min-h-screen bg-slate-100`}
      >
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  )
}
