import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou Jefferson
      </h3>

      <img 
        className={styles.fotoSobreMim}
        src={fotoSobreMim} 
        alt="Foto do Jefferson Akira Fukamizu" 
      />

      <p className={styles.paragrafo}>Oi, tudo bem? Eu sou Desenvolvedor Front-End e estou feliz de te ver por aqui.</p>

      <p className={styles.paragrafo}>Minha história com programação começou no FATEC Mogi das Cruzes, quando comecei a cursar Analise e Desenvolvimento de Sistemas. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.</p>

      <p className={styles.paragrafo}>Depois de um tempo consegui a oportunidade de estagiar na empresa MZ, onde aprendi bastante coisa sobre wordpress e desenvolvimento front-end, o que me fez descobri que eu amo programar e desenvolver coisas.</p>

      <p className={styles.paragrafo}>Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.</p>

      <p className={styles.paragrafo}>Desde então, tem sido apenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!</p>
    </PostModelo>
  )
}
