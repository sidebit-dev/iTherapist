import { useContext, FormEvent, useState } from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import Image from "next/image";

// import logoImg from '../../../public/logoImg';
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { toast } from "react-toastify";

import { AuthContext } from "../../contexts/AuthContext";

import Link from "next/link";

import { canSSRGuest } from '../../utils/canSSRGuest';

export default function SignIn() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.warning('Preencha os campos');
      return;
    }

    setLoading(true);

    let data = {
      email,
      password,
    };

    await signIn(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Faça seu Login</title>
      </Head>
      <div className={styles.containerCenter}>
        {/* <Image src={logoImg} alt="Logo Sys Pizzaria" />   */}
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Sua senha"
              type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
              Acessar
            </Button>
          </form>
          <Link href="/signup" className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx)=> {
  return {
    props: {}
  }
  })