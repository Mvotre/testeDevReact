import styles from "./tabela.module.css"

function Modal( { modo, aluno, fechaModal, dadosExclusao } ) {
  const conteudoModal = () => {
    if(modo === 'excluir'){
      return ( 
        <div className={styles.erroContent}>
          <span className="material-icons-outlined"> report_problem </span>
          <div className={styles.controles}>
            <p> Você tem certeza que deseja excluir o aluno {aluno.nome}? </p>
            <div className={styles.controlesBotoes}>
              <button onClick={fechaModal} className={styles.btnExcluir}> Cancelar </button>
              <button onClick={ () => dadosExclusao(aluno.id)} className={styles.btnNovo}> Excluir </button>
            </div>
          </div>
        </div>
      )
    } else {

      return ( 
        <div className={styles.edicaoContent}>
          <h4 className={styles.edicaoTitulo}> { modo === "editar" ? 'Edição de aluno' : 'Cadastro de aluno'} </h4>
          <div className={styles.inputsModal}>
            <div className={styles.inputsModalItem}>
              <label> Nome </label>
              <input type="text" defaultValue={aluno.nome} />
            </div>

            <div className={styles.inputsModalItem}>
              <label> CPF </label>
              <input type="text" defaultValue={aluno.cpf} /> 
            </div>

            <div className={styles.inputsModalItem}>
              <label> E-mail </label>
              <input type="text" defaultValue={aluno.email} /> 
            </div>
          </div>

          <div className={styles.controlesBotoes}>
            <button onClick={fechaModal} className={styles.btnExcluir}> Cancelar </button>
            <button className={styles.btnNovo}> { modo === "editar" ? 'Salvar' : 'Adicionar'} </button>
          </div>
        </div>
      )
    }
  }
  
  return (
    <div className={styles.containerModal}>
      <div className={styles.conteudoModal}>
        {conteudoModal()}
      </div>
    </div>
  );
}

export default Modal;