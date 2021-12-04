import React from "react"
import urlApi from '../../service/api'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom"
import '../Styles/Styles.css'


export default function FabricantesEditar() {

	const history = useHistory()

	let idBoolean = false

	const [codigoFabricante, setCodigoFabricante] = useState(0)
	const [nome, setNome] = useState('')
	const [fantasia, setFantasia] = useState('')
	const [origem, setOrigem] = useState('')
	const [fundacao, setFundacao] = useState('')
	const [checked, setChecked] = useState(false)

	const { id } = useParams()

	function IfCrud() {
		id == 0 ? idBoolean = true : idBoolean = false
	}

	useEffect(() => {
		async function getFabricantes() {
			if (id == 0) {
				setChecked(true)
				setCodigoFabricante('Novo')
			} else {
				const { data } = await urlApi.get(`/fabricante/${id}`)
				console.log(data)

				setCodigoFabricante(data[0].fab_codigo)
				setNome(data[0].fab_nome)
				setFantasia(data[0].fab_fantasia)
				setOrigem(data[0].fab_pais)
				setFundacao(data[0].fab_fundacao)
			}
		}
		IfCrud()
		getFabricantes()
	}, [])

	async function handleFabricantes(e) {
		e.preventDefault()
		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData)

		try {
			if (nome.length == 0) {
				alert('Insira um nome válido.')
			} else {
				if (id == 0) {
					console.log(data)
					await urlApi.post('fabricante', data)
						.then(res => alert("Inserção realizada com sucesso."))
				} else {
					await urlApi.put(`/fabricante/${id}`, data)
						.then(res => alert("Alteração realizada com sucesso.!"))
				}
			}
		} catch (error) {
			alert('Erro no cadastro, tente novamente.')
			console.log(error)
		}
	}


	return (
		<>
			<div >
				<form
					onSubmit={handleFabricantes}
					className="container-fluid"
				>
				<div className="form-control">
					<div className="col-md-12 text-center">
						<h1> Cadastro </h1>
					</div>
					<div className="row">
						
						<div className="form-group col-md-6 mb-3">
							<label htmlFor="fab_codigo"> Código </label>
							<input
								type="text"
								className="form-control form-control-lg"
								name="fab_codigo"
								value={codigoFabricante}
								onChange={e => setCodigoFabricante(e.target.value)}
								readOnly
							/>
						</div>
						<div className="form-group col-md-6 mb-3">
							<label htmlFor="fab_nome"> Fabricante </label>
							<input
								type="text"
								className="form-control form-control-lg"
								name="fab_nome"
								value={nome}
								onChange={e => setNome(e.target.value)} />
						</div>
						<div className="form-group col-md-4 mb-3" >
							<label htmlFor="fab_fantasia"> Fantasia </label>
							<input
								type="text"
								className="form-control form-control-lg"
								name="fab_fantasia"
								value={fantasia}
								onChange={e => setFantasia(e.target.value)}
							/>
						</div>
						<div className="form-group col-md-4 mb-3" >
							<label htmlFor="fab_pais"> Origem </label>
							<input
								type="text"
								className="form-control form-control-lg"
								name="fab_pais"
								value={origem}
								onChange={e => setOrigem(e.target.value)}
							/>
						</div>
						<div className="form-group col-md-4 mb-3" >
							<label htmlFor="fab_fundacao"> Fundação </label>
							<input
								type="text"
								className="form-control form-control-lg"
								name="fab_fundacao"
								value={fundacao}
								onChange={e => setFundacao(e.target.value)}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 text-center">
							<button
								type="submit"
								className="btn btn-info btn-lg"
								onClick={() => history.push('/fabricante')}
							>
								Voltar
							</button>
						</div>
						<div className="col-md-6 text-center">
							<button
								type="submit"
								className="btn btn-info btn-lg"
							>
								Salvar
							</button>
						</div>
					</div>
				</div>
				</form>
			</div>
		</>
	)
}