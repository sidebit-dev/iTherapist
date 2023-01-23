import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from './styles.module.scss';

export default function Therapies(){
    return(
        <>
        <Head>
            <title>Terapias</title>
        </Head>   
        <div>
            <Header/>
            <main className={styles.container}>
            <h1>Terapias</h1>
            </main>
            <Footer/>
        </div>
        </>
    )
}