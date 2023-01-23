import { useContext } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoImg from '../../../public/logoImg.png';
import { FiLogOut, FiLogIn } from "react-icons/fi";

import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  // const { user } = useContext(AuthContext);
  const { signOut, isAuthenticated } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image src={logoImg} width={190} height={60} alt="Logo Sys Pizzaria" />
        </Link>

        <nav className={styles.menuNav}>
          <Link href={"/about"} className={styles.text}>
            Sobre mim
          </Link>

          <Link href={"/therapies"} className={styles.text}>
            Terapias
          </Link>

          <Link href={"/schedule"} className={styles.text}>
            Agendamento
          </Link>
          
          {!isAuthenticated && (<Link href={"/signin"} className={styles.text}>Entrar</Link>)}

          {isAuthenticated && (<Link href={"/signin"} className={styles.text}>Área do Cliente</Link>)}

          <button onClick={signOut}><FiLogOut color="#FFF" size={24} /></button>         
       
        </nav>
      </div>
      {/* <h1>Bem-vindo! {user?.name}</h1> */}
    </header>
  );
}
