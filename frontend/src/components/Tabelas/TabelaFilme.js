import React from 'react';
import { useHistory } from 'react-router-dom';

const divStyle = {
  color: 'white'
}

const aStyle = {
  textAlign: 'center'
}

const button = {
  marginTop: '8vh'
}

export default function TabelaFilme(props) {

  const history = useHistory()
  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr
          className={i % 2 === 0 ? "par" : "impar"}
          key={item.fil_codigo} >
          <td> {item.fil_codigo} </td>
          <td
            style={{ textAlign: 'left' }}> {item.fil_nomeFilme} </td>
          <td
            style={{ textAlign: 'left' }}> {item.fil_produtora} </td>
          <td
            style={{ textAlign: 'left' }}> {item.fil_diretor} </td>
          <td
            style={{ textAlign: 'left' }}> {item.fil_anoFilmagem} </td>
          <td
            style={{ textAlign: 'left' }}> {item.fil_pais} </td>

          <td
            id="editar"> <a
              className="btn btn-dark"
              href={props.chave + item.fil_codigo} > Editar </a></td>
        </tr>
      )
    })
  }

  return (
    <div
      className="container-fluid">
      <table id="tabela"
        className="table table-lg"
        style={divStyle}>
        <thead id="cabecalho_rel">
          <tr
            style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Nome do Filme </th>
            <th scope="col"> Produtora </th>
            <th scope="col"> Diretor </th>
            <th scope="col"> Ano de Filmagem </th>
            <th scope="col"> País de Origem </th>
            <th scope="col" style={aStyle}><a href={props.chave + '0'} className="btn btn-dark btn-block " > Novo Filme </a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
      <div
        className="col-md-12 text-center mb-3">
        <button
          type="submit"
          className="btn btn-dark btn-lg"
          onClick={() => history.push('/')}
          style={button}> Início </button>
      </div>
    </div>
  )
}