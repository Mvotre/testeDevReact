import styles from "./tabela.module.css"

function Controles({ btnActions, index }) {

  return (
    <div className={styles.botoesContainer}>
      <button onClick={btnActions.excluir} className={index === 0 ? `${styles.inactive} ${styles.btnExcluir}` : styles.btnExcluir}> Excluir aluno </button>
      <button onClick={btnActions.editar} className={index === 0 ? `${styles.inactive} ${styles.btnEditar}` : styles.btnEditar} > Editar registro </button>
      <button onClick={btnActions.novo} className={styles.btnNovo}> Novo aluno </button>
    </div>
  );
}

export default Controles;