import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, mundo!
        </h1>

        <p>
          Boas vindas ao meu espaço pessoal! Eu Jefferson Akira Fukamizu, Desenvolvedor Front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido}
          src={circuloColorido} 
          alt=""
          aria-hidden={true}
        />

        <img 
          className={styles.minhaFoto}
          src={minhaFoto} 
          alt="Foto do Jefferson Akira Fukamizu"
          aria-hidden={true}
        />
      </div>
    </div>
  )
}
