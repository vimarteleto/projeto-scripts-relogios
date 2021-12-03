import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaFilme from "../Tabelas/TabelaFilme";

const divStyle = {
  height: '100%',
  border: '3px ridge red',
  backgroundColor: 'rgba(61,59,61,0.5)',
  textAlign: 'center',
  color: 'white'
}

const rowStyle = {
  marginTop: '5vh'
}

const rowStyle2 = {
  marginTop: '5vh'
}
export default function Filmes() {

  const [filme, setFilme] = useState([])
  useEffect(() => {
    urlApi.get('filme')
      .then(response => response.data)
      .then(response => setFilme(response));
  }, [])

  return (
    <>
      <form>
        <div
          id="idFilme"
          style={divStyle}>
          <div
            className="container-fluid">
            <div
              className="row"
              style={rowStyle}>
              <div
                className="col-md-12">
                <h1> Registro de Filmes </h1>
              </div>
            </div>
          </div>
          <div
            style={rowStyle2}>
            <TabelaFilme
              items={filme}
              chave={'/filme/'}
            />
          </div>
        </div>
      </form>
    </>
  )
}