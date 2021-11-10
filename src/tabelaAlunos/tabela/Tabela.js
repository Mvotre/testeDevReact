import React, { useState } from 'react';

import Controles from "./Controles";
import Modal from "./Modal";
import styles from "./tabela.module.css"

function Tabela( { dados, excluir } ) {
  const [ indexSelecionado, setIndexSelecionado ] = useState(0);
  const [ modalAtivo, setModalAtivo ] = useState(false);
  const [ modoModal, setModoModal ] = useState('');
  const [ usuarioSelecionado, setUsuarioSelecionado ] = useState('');

  let btnFunctions = {
    novo: () => {
      setModoModal("novo")
      setModalAtivo(true)
    },
    editar: () => {
      setModoModal("editar")
      setModalAtivo(true)
    },
    excluir: () => {
      setModoModal("excluir")
      setModalAtivo(true)
    }
  }

  let cancelaModal = () => {
    setIndexSelecionado(0)
    setUsuarioSelecionado('')
    setModalAtivo(false)
  }

  let excluiAluno = (id) => {
    excluir(id)
    setModalAtivo(false)
  }

  let selecionaAluno = (aluno) => {
    if(indexSelecionado === aluno.id){
      setIndexSelecionado(0)
      setUsuarioSelecionado('')
    } else {
      setIndexSelecionado(aluno.id);
      setUsuarioSelecionado(aluno)
    }
  }

  const exibeModal = () => {
    if(modalAtivo){
      return <Modal  
              modo={modoModal} 
              aluno={usuarioSelecionado} 
              fechaModal={cancelaModal} 
              dadosExclusao={excluiAluno}
            />
    }
  }

  return (
    <>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th> Nome </th>
            <th> CPF </th>
            <th> E-mail </th>
          </tr>
        </thead>
        <tbody>
          {   
            dados.map( aluno => {
              return (
                <tr 
                  key={aluno.id} 
                  onClick={() => selecionaAluno(aluno)} 
                  className={aluno.id === indexSelecionado ? styles.active : ''} 
                >
                  <td> {aluno.nome} </td>
                  <td> {aluno.cpf} </td>
                  <td> {aluno.email} </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <Controles btnActions={btnFunctions} index={indexSelecionado}/>

      { exibeModal() }
    </>
  );
}

export default Tabela;
