import { useContext } from "react";
import Head from "next/head";
import { canSSRAuth } from "../../utils/canSSAuth";
import { Header } from '../../components/Header';
import { Footer } from "../../components/Footer";
import { AuthContext } from "../../contexts/AuthContext";
import styles from './styles.module.scss';

export default function Dashboard() {
  const { user, isAuthenticated, signIn } = useContext(AuthContext);
  return (
    <>
        <Head>
            <title>Painel do Usuário</title>
        </Head>
        <div>
          <Header/>
          <main className={styles.container}>
          {isAuthenticated && (<h1>Bem-vindo! {user?.name}</h1>)}     
          </main>
          <Footer/>
        </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
