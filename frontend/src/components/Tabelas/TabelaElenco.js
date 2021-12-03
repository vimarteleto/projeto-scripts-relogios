import React from 'react';
import { useHistory } from 'react-router-dom';

const divStyle = {
  color: 'white'
}

const aStyle = {
  textAlign: 'center'
}

const button = {
  marginTop: '10vh'
}
export default function TabelaElenco(props) {

  const history = useHistory()

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {

      return (
        <tr
          className={i % 2 === 0 ? "par" : "impar"}
          key={item.ele_codigo} >
          <td> {item.ele_codigo} </td>
          <td
            style={{ textAlign: 'left' }}> {item.ele_nome} </td>
          <td
            style={{ textAlign: 'left' }}> {item.ele_sexo} </td>
          <td
            style={{ textAlign: 'left' }}> {item.ele_nacionalidade} </td>
          <td
            style={{ textAlign: 'left' }}> {item.ele_dtNascimento} </td>
          <td
            style={{ textAlign: 'left' }}> {item.fil_codigo} </td>

          <td
            id="editar"> <a
              className="btn btn-dark"
              href={props.chave + item.ele_codigo} > Editar </a></td>
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
            <th scope="col"> Nome do Ator </th>
            <th scope="col"> Sexo </th>
            <th scope="col"> Nacionalidade </th>
            <th scope="col"> Data de Nascimento </th>
            <th scope="col"> Código do Filme </th>
            <th scope="col" style={aStyle}><a href={props.chave + '0'} className="btn btn-dark btn-block " > Novo Ator </a></th>
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