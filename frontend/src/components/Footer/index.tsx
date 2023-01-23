import { useContext } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
// import logoImg from '../../public/logoImg.svg';
import { FiBarChart } from "react-icons/fi";

export function Footer() {
 
  

  return (
    <header className={styles.footerContainer}>
      <div className={styles.footerContent}>
       
        <Link href="/">         
         <p className={styles.text}><FiBarChart color="#FFF" size={24} /> Home</p>
        </Link>
        <Link href="/"> 
        <p className={styles.text}>Sidebit &copy; 2023</p>
        </Link>
        
      </div>
    </header>
  );
}
