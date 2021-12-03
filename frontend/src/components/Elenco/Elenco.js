import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaElenco from "../Tabelas/TabelaElenco";

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
export default function Elenco() {

  const [elenco, setElenco] = useState([])
  useEffect(() => {
    urlApi.get('elenco')
      .then(response => response.data)
      .then(response => setElenco(response));
  }, [])

  return (
    <>
      <form>
        <div
          id="idElenco"
          style={divStyle}>
          <div
            className="container-fluid">
            <div
              className="row"
              style={rowStyle}>
              <div
                className="col-md-12">
                <h1> Registro do Elenco </h1>
              </div>
            </div>
          </div>
          <div
            style={rowStyle2}>
            <TabelaElenco
              items={elenco}
              chave={'/elenco/'}
            />
          </div>
        </div>
      </form>
    </>
  )
}