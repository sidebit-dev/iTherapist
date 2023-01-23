import styles from './styles.module.scss';
import Image from 'next/image';
import heroImg from '../../.././../public/cidade.jpg';


export function Hero(){

    return(
        <div className={styles.heroImage}>
            <h1>Deixe o Reiki emanar energias boas a você!</h1>
            <Image src={heroImg} width={1080} height={600} alt="Uma cidade" />
        </div>
    )
}