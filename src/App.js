import React, { useState } from 'react';

import './App.css';
import TabelaAlunos from './tabelaAlunos/TabelaAlunos';


function App() {
	const [ retornoFake, setRetornoFake ] = useState([
		{
			"nome": "Lara Aline Bernardes",
			"cpf": "068.642.497-27",
			"email": "laraalinebernardes__laraalinebernardes@fertau.com.br",
			"id": 1
		},
		{
			"nome": "Mirella Emanuelly Sara Ribeiro",
			"cpf": "207.069.697-90",
			"email": "mirellaemanuellysararibeiro_@br.atlascopco.com",
			"id": 2
		},
		{
			"nome": "Enrico Jorge Pires",
			"cpf": "241.123.246-26",
			"email": "enricojorgepires__enricojorgepires@digen.com.br",
			"id": 3
		},
		{
			"nome": "Luana Aline Andreia Campos",
			"cpf": "728.776.657-47",
			"email": "luanaalineandreiacampos-79@maggitoyota.com.br",
			"id": 4
		},
		{
			"nome": "Vitória Mariane Sarah Gonçalves",
			"cpf": "023.857.398-28",
			"email": "vvitoriamarianesarahgoncalves@gaviola.com",
			"id": 5
		},
		{
			"nome": "Mirella Elaine Mariane Baptista",
			"cpf": "906.800.586-30",
			"email": "mirellaelainemarianebaptista__mirellaelainemarianebaptista@trt15.jus.br",
			"id": 6
		},
		{
			"nome": "Benedito Murilo Ferreira",
			"cpf": "533.912.389-84",
			"email": "beneditomuriloferreira.beneditomuriloferreira@carreiradasilva.com",
			"id": 7
		},
		{
			"nome": "César Fernando Francisco da Rocha",
			"cpf": "653.503.500-05",
			"email": "cesarfernandofranciscodarocha-82@sp.senac.com.br",
			"id": 8
		},
		{
			"nome": "Thiago Thomas Nascimento",
			"cpf": "184.080.671-09",
			"email": "thiagothomasnascimento-85@asconinternet.com.br",
			"id": 9
		},
		{
			"nome": "Tomás Mário Araújo",
			"cpf": "164.112.560-80",
			"email": "tomasmarioaraujo.tomasmarioaraujo@costaporto.com.br",
			"id": 10
		},
		{
			"nome": "Edson Manuel da Conceição",
			"cpf": "023.035.311-87",
			"email": "edsonmanueldaconceicao.edsonmanueldaconceicao@atualvendas.com",
			"id": 11
		},
		{
			"nome": "Eloá Rosângela Stella Brito",
			"cpf": "682.293.229-10",
			"email": "eloarosangelastellabrito-73@toysbrasil.com.br",
			"id": 12
		},
		{
			"nome": "Sebastiana Pietra Fátima Peixoto",
			"cpf": "067.064.879-53",
			"email": "ssebastianapietrafatimapeixoto@jpmanager.com.br",
			"id": 13
		},
		{
			"nome": "Matheus Vinicius Pietro da Paz",
			"cpf": "884.230.560-07",
			"email": "mmatheusviniciuspietrodapaz@konzeption.com.br",
			"id": 14
		},
		{
			"nome": "Luzia Lara Campos",
			"cpf": "360.593.546-02",
			"email": "luzialaracampos.luzialaracampos@econe.com.br",
			"id": 15
		},
		{
			"nome": "Sônia Giovanna Sarah Moura",
			"cpf": "966.673.274-23",
			"email": "soniagiovannasarahmoura__soniagiovannasarahmoura@caocarinho.com.br",
			"id": 16
		},
		{
			"nome": "Clarice Antônia Figueiredo",
			"cpf": "298.466.368-30",
			"email": "clariceantoniafigueiredo.clariceantoniafigueiredo@hotmail.co.jp",
			"id": 17
		},
		{
			"nome": "Igor Francisco Baptista",
			"cpf": "725.865.245-00",
			"email": "igorfranciscobaptista_@zigotto.com.br",
			"id": 18
		},
		{
			"nome": "Rafael Bryan Cauã Cardoso",
			"cpf": "037.951.969-06",
			"email": "rafaelbryancauacardoso_@original-veiculos.com.br",
			"id": 19
		},
		{
			"nome": "Amanda Ester Aparício",
			"cpf": "852.596.903-62",
			"email": "amandaesteraparicio_@scalioni.com.br",
			"id": 20
		},
		{
			"nome": "Marcelo Kevin Assis",
			"cpf": "717.495.926-14",
			"email": "marcelokevinassis-97@moppe.com.br",
			"id": 21
		},
		{
			"nome": "Thomas Marcos Anderson Moraes",
			"cpf": "519.378.995-19",
			"email": "thomasmarcosandersonmoraes-86@patrilarm.com.br",
			"id": 22
		},
		{
			"nome": "Gustavo Pedro Henrique Dias",
			"cpf": "657.156.973-60",
			"email": "gustavopedrohenriquedias__gustavopedrohenriquedias@viasegbrasil.com.br",
			"id": 23
		},
		{
			"nome": "Sérgio Leonardo Campos",
			"cpf": "596.572.735-60",
			"email": "sergioleonardocampos.sergioleonardocampos@freitasprior.com.br",
			"id": 24
		},
		{
			"nome": "Rodrigo Leonardo Antonio de Paula",
			"cpf": "313.891.565-59",
			"email": "rodrigoleonardoantoniodepaula.rodrigoleonardoantoniodepaula@fosjc.unesp.br",
			"id": 25
		},
		{
			"nome": "Samuel Carlos Baptista",
			"cpf": "790.434.273-14",
			"email": "samuelcarlosbaptista.samuelcarlosbaptista@estagiarios.com",
			"id": 26
		},
		{
			"nome": "Amanda Cláudia Maria de Paula",
			"cpf": "577.546.721-38",
			"email": "amandaclaudiamariadepaula_@gmalato.com.br",
			"id": 27
		},
		{
			"nome": "Pedro Noah Gael Jesus",
			"cpf": "578.100.246-47",
			"email": "pedronoahgaeljesus__pedronoahgaeljesus@aclnet.com.br",
			"id": 28
		},
		{
			"nome": "Aline Aurora Moreira",
			"cpf": "332.589.287-62",
			"email": "alineauroramoreira_@capgemini.com",
			"id": 29
		},
		{
			"nome": "Filipe Iago Moura",
			"cpf": "562.603.187-15",
			"email": "filipeiagomoura-77@yhaoo.com.br",
			"id": 30
		}
	]);


	const excluirAluno = (id) => {
		let teste = [...retornoFake]
		let arrayLimpo = teste.filter( el => {
			return el.id !== id;
		})
		setRetornoFake(arrayLimpo)
	}

  return (
    <div className="main">
      <h3> Teste desenvolvedor Descomplica!</h3>
     
			<p> Aqui nesse componente passei a tabela fake. No mundo real, passaria como props o retorno de uma conexão com a API </p>
      <TabelaAlunos dados={retornoFake} excluirAluno={excluirAluno} />
    </div>
  );
}

export default App;
