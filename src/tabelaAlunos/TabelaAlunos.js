import React, { useState } from 'react';
import Filtros from './Filtros';

import Tabela from "./tabela/Tabela";
import styles from "./tabelaAlunos.module.css"

let cacheLista = [];

function TabelaAlunos( { dados, excluirAluno } ) {
  const [ arrayFiltrado, setArrayFiltrado ] = useState([]);
  const [ retornoPesquisa, setRetornoPesquisa ] = useState(false);
  
  function salvaLista(lista){
    cacheLista = lista
  }

  // Função de filtro. Como não ficou claro se era pra filtrar só por um campo de cada vez, fiz filtrar por todos que tiverem sido preenchidos.
  function recebeFiltros(filtros){
    setRetornoPesquisa(true);
    // se todos os campos de filtro estiverem em branco, retorna o array completo. Salva o mesmo para acessos diretos sem reconsultar a api. Se existisse paginação, a lógica tinha que ser mais complexa.
    if(!filtros.nome && !filtros.cpf && !filtros.email){
      setArrayFiltrado(dados);
      salvaLista(dados);
    } else {
      if(cacheLista) {
        setArrayFiltrado(cacheLista);
      }

      for(const filtro in filtros){
        if(filtros[filtro]){
          setArrayFiltrado(dados.filter( el => {
            return el[filtro].toLowerCase().includes(filtros[filtro])
          }))
        }
      }
    }
  }

  const excluiAluno = (id) => {
    excluirAluno(id)
  }

  const renderLista = () => {
    if(arrayFiltrado.length > 0){
      return <Tabela dados={arrayFiltrado} excluir={excluiAluno}/> 
    } else {
      return <p> {!retornoPesquisa ? 'Preencha os campos de filtro, ou clique no botão "Filtrar" para receber a lista completa' : 'Nenhum aluno encontrado'}  </p>
    }
  }

  return (
    <main className={styles.container}>
      <Filtros filtrosHandler={recebeFiltros}/>
      
      { renderLista() }
    </main>
  );
}

export default TabelaAlunos;
