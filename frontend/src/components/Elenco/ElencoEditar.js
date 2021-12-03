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

export default function ElencoEditar() {

  const history = useHistory()

  let idBoolean = false;

  const [codigoE, setCodigoE] = useState(0);
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [filCodigo, setFilCodigo] = useState('');
  const [checked, setChecked] = useState(false);

  const { id } = useParams();

  function IfCrud() {
    console.log('Id Elenco: ' + id + ' - ' + idBoolean)
    if (id === 0) {
      idBoolean = true;
    } else {
    }
  }

  useEffect(() => {
    async function getElenco() {
      console.log('Elenco: ' + id + ' - ' + idBoolean)
      if (id == 0) {
        setChecked(true);
        console.log('Inclusão de novo registro!')
      } else {
        const { data } = await urlApi.get('/elenco/' + id);
        console.log(data)

        setCodigoE(data[0].ele_codigo);
        setNome(data[0].ele_nome);
        setSexo(data[0].ele_sexo);
        setNacionalidade(data[0].ele_nacionalidade);
        setNascimento(data[0].ele_dtNascimento);
        setFilCodigo(data[0].fil_codigo);

        console.log(data[0].ele_nome)
      }
    }
    IfCrud();
    getElenco();
  }, []);

  async function handleElenco(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("Dados Form: " + data.ele_sexo);

    try {
      if (nome.length === 0) {
        alert('Insira um nome válido')
      } else {
        console.log("Codigo Elenco: ", id)
        if (id == 0) {
          console.log("Inclusão de Registro!")
          await urlApi.post('elenco', data)
            .then(response => alert("Inserção Realizada com Sucesso!!!!"))
        } else {
          console.log("Alteração de Registro! ", id)
          await urlApi.put('/elenco/' + id, data)
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
          onSubmit={handleElenco}
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
                name="ele_codigo"
                value={codigoE}
                onChange={e => setCodigoE(e.target.value)}
              />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="ele_nome" style={label}> Nome Ator </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="ele_nome"
                value={nome}
                onChange={e => setNome(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="ele_sexo" style={label}> Sexo </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="ele_sexo"
                value={sexo}
                onChange={e => setSexo(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="ele_nacionalidade" style={label}> Nacionalidade </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="ele_nacionalidade"
                value={nacionalidade}
                onChange={e => setNacionalidade(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="ele_dtNascimento" style={label}> Data de Nascimento </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="ele_dtNascimento"
                value={nascimento}
                onChange={e => setNascimento(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fil_codigo" style={label}> Código do Filme </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fil_codigo"
                value={filCodigo}
                onChange={e => setFilCodigo(e.target.value)} />
            </div>
          </div>
          <div
            className="row">
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                onClick={() => history.push('/elenco')}
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