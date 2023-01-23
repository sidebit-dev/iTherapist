import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from './styles.module.scss';

export default function About(){
    return(
        <>
        <Head>
            <title>Sobre mim</title>
        </Head>   
        <div>
            <Header/>
            <main className={styles.container}>
            <h1>Sobre mim</h1>
            </main>
            <Footer/>
        </div>
        </>
    )
}