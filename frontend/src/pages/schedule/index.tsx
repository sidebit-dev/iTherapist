import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { canSSRAuth } from "../../utils/canSSAuth";
import styles from './styles.module.scss';

export default function Schedule(){
    return(
        <>
        <Head>
            <title>Agenda</title>
        </Head>   
        <div>
            <Header/>
            <main className={styles.container}>
            <h1>Agenda</h1>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})