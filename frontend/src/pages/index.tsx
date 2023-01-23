import Head from 'next/head';
import styles from '../../styles/home.module.scss';
import { Header } from '../components/Header';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Hero } from '../components/sessoes/Hero';

// import logoImg from '../../public/logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Página inicial</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <main>
          <Hero/>
        </main>
        <Footer/>
      </div>
    </>
  )
}
