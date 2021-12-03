import React from "react"
import urlApi from '../../service/api';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

const label = {
  color: 'white'
}

const h1 = {
  color: 'white'
}


const button = {
  marginTop: '10vh'
}

const formStyle = {
  marginTop: '5vh'
}

const inputStyle = {
  marginTop: '2.5vh'
}

export default function FilmesEditar() {

  const history = useHistory()

  let idBoolean = false;

  const [codigo, setCodigo] = useState(0);
  const [nome, setNome] = useState('');
  const [produtora, setProdutora] = useState('');
  const [diretor, setDiretor] = useState('');
  const [ano, setAno] = useState('');
  const [pais, setPais] = useState('');
  const [checked, setChecked] = useState(false);

  const { id } = useParams();

  function IfCrud() {
    console.log('Id Filme: ' + id + ' - ' + idBoolean)
    if (id === 0) {
      idBoolean = true;
    } else {
    }
  }

  useEffect(() => {
    async function getFilmes() {
      console.log('Filme: ' + id + ' - ' + idBoolean)
      if (id == 0) {
        setChecked(true);
        console.log('Inclusão de novo registro!')
      } else {
        const { data } = await urlApi.get('/filme/' + id);
        console.log(data)

        setCodigo(data[0].fil_codigo);
        setNome(data[0].fil_nomeFilme);
        setProdutora(data[0].fil_produtora);
        setDiretor(data[0].fil_diretor);
        setAno(data[0].fil_anoFilmagem);
        setPais(data[0].fil_pais);

        console.log(data[0].fil_nomeFilme)
      }
    }
    IfCrud();
    getFilmes();
  }, []);

  async function handleFilmes(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("Dados Form: " + data.fil_pais);

    try {
      if (nome.length === 0) {
        alert('Insira um nome válido')
      } else {
        console.log("Codigo Filme: ", id)
        if (id == 0) {
          console.log("Inclusão de Registro!")
          await urlApi.post('filme', data)
            .then(response => alert("Inserção Realizada com Sucesso!!!!"))
        } else {
          console.log("Alteração de Registro! ", id)
          await urlApi.put('/filme/' + id, data)
            .then(response => alert("Alteração Realizada com Sucesso!!!!"))
        }
      }
    } catch (error) {
      alert('Erro no cadastro, tente novamente.')
    }
  }

  return (
    <>
      <div >
        <form
          onSubmit={handleFilmes}
          className="container-fluid" style={formStyle}>
          <div
            className="row">
            <div
              className="col-md-12 text-center">
              <h1
                style={h1}> Formulário de Cadastro </h1>
            </div>
            <div
              className="form-group col-md-6 mb-3"
              style={inputStyle}>
              <label
                style={label}> Código </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fil_codigo"
                value={codigo}
                onChange={e => setCodigo(e.target.value)}
              />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fil_nomeFilme" style={label}> Nome Filme </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fil_nomeFilme"
                value={nome}
                onChange={e => setNome(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fil_produtora" style={label}> Produtora </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fil_produtora"
                value={produtora}
                onChange={e => setProdutora(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fil_diretor" style={label}> Diretor </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fil_diretor"
                value={diretor}
                onChange={e => setDiretor(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fil_anoFilmagem" style={label}> Ano Filmagem </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fil_anoFilmagem"
                value={ano}
                onChange={e => setAno(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fil_pais" style={label}> País </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fil_pais"
                value={pais}
                onChange={e => setPais(e.target.value)} />
            </div>
          </div>
          <div
            className="row">
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                onClick={() => history.push('/filme')}
                style={button}> Voltar </button>
            </div>
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                style={button}> Salvar </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}