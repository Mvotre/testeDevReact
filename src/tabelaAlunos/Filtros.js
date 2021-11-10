import React, { useState } from 'react';

import styles from "./tabelaAlunos.module.css"

function Filtros( {filtrosHandler}) {
  const [ formData, setFormData ] = useState({
    nome: '',
    cpf: '',
    email: ''
  });

  function teste() {
    limpaForm()
    filtrosHandler(formData)
  }

  function limpaForm() {
    setFormData( {
      nome: '',
      cpf: '',
      email: ''
    })
  }

  return (
    <div className={styles.filtroContainer}>
      <h4> Filtros </h4> 
      <div className={styles.filtroInput}>
        <label> Nome </label>
        <input type="text" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})}></input>
      </div>

      <div className={styles.filtroInput}>
        <label> CPF </label>
        <input type="text" value={formData.cpf} onChange={(e) => setFormData({...formData, cpf: e.target.value})}></input>
      </div>

      <div className={styles.filtroInput}>
        <label> E-mail </label>
        <input type="text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}></input>
      </div>

      <button onClick={teste}> Filtrar </button>
    </div>
  );
}

export default Filtros;