import React from "react"
import urlApi from '../../service/api'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom"
import '../Styles/Styles.css'

export default function RelogiosEditar() {

	const history = useHistory()

	let idBoolean = false

	const [codigoRelogio, setCodigoRelogio] = useState(0)
	const [descricao, setDescricao] = useState('')
	const [modelo, setModelo] = useState('')
	const [tipo, setTipo] = useState('')
	const [pulseira, setPulseira] = useState('')
	const [garantia, setGarantia] = useState('')
	const [fabricante, setFabricante] = useState('')
	const [checked, setChecked] = useState(false)

	const { id } = useParams()

	function IfCrud() {
		id == 0 ? idBoolean = true : idBoolean = false
	}

	useEffect(() => {
		async function getRelogios() {
			if (id == 0) {
				setChecked(true)
				setCodigoRelogio('Novo')
			} else {
				const { data } = await urlApi.get(`/relogio/${id}`)
				console.log(data)

				setCodigoRelogio(data[0].rel_codigo)
				setDescricao(data[0].rel_descricao)
				setModelo(data[0].rel_modelo)
				setTipo(data[0].rel_tipo)
				setPulseira(data[0].rel_pulseira)
				setGarantia(data[0].rel_garantia)
				setFabricante(data[0].fab_codigo)
			}
		}
		IfCrud()
		getRelogios()
	}, [])

	async function handleRelogios(e) {
		e.preventDefault()
		const formData = new FormData(e.target)
		const data = Object.fromEntries(formData)

		try {
			if (descricao.length == 0) {
				alert('Insira uma descrição válida')
			} else {
				if (id == 0) {
					await urlApi.post('relogio', data)
						.then(response => alert("Inserção realizada com sucesso."))
				} else {
					await urlApi.put(`/relogio/${id}`, data)
						.then(response => alert("Alteração realizada com sucesso."))
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
					onSubmit={handleRelogios}
					className="container-fluid" 
				>
					<div className="form-control">
						<div className="col-md-12 text-center">
							<h1> Cadastro </h1>
						</div>
						<div className="row">
							
							<div className="form-group col-md-2 mb-3">
								<label htmlFor="rel_codigo"> Código </label>
								<input
									type="text"
									className="form-control form-control-lg"
									name="rel_codigo"
									value={codigoRelogio}
									onChange={e => setCodigoRelogio(e.target.value)}
									readOnly
								/>
							</div>
							<div
								className="form-group col-md-5 mb-3">
								<label htmlFor="rel_descricao"> Descrição </label>
								<input
									type="text"
									className="form-control form-control-lg"
									name="rel_descricao"
									value={descricao}
									onChange={e => setDescricao(e.target.value)} />
							</div>
							<div
								className="form-group col-md-5 mb-3">
								<label htmlFor="rel_modelo"> Modelo </label>
								<input
									type="text"
									className="form-control form-control-lg"
									name="rel_modelo"
									value={modelo}
									onChange={e => setModelo(e.target.value)} 
								/>
							</div>
						</div>
						<div className="row">
							<div
								className="form-group col-md-2 mb-3">
								<label htmlFor="rel_tipo"> Tipo </label>
								<input
									type="text"
									className="form-control form-control-lg"
									name="rel_tipo"
									value={tipo}
									onChange={e => setTipo(e.target.value)} 
								/>
							</div>
							<div
								className="form-group col-md-4 mb-3">
								<label htmlFor="rel_pulseira"> Pulseira </label>
								<input
									type="text"
									className="form-control form-control-lg"
									name="rel_pulseira"
									value={pulseira}
									onChange={e => setPulseira(e.target.value)} 
								/>
							</div>
							<div
								className="form-group col-md-3 mb-3">
								<label	htmlFor="rel_garantia"> Meses de garantia </label>
								<input
									type="text"
									className="form-control form-control-lg"
									name="rel_garantia"
									value={garantia}
									onChange={e => setGarantia(e.target.value)} 
								/>
							</div>
							<div className="form-group col-md-3 mb-3">
								<label htmlFor="fab_codigo"> Código do fabricante </label>
								<input
									type="text"
									className="form-control form-control-lg"
									name="fab_codigo"
									value={fabricante}
									onChange={e => setFabricante(e.target.value)}
								/>
							</div>
						</div>
					
					<div className="row">
						<div className="col-md-6 text-center">
							<button
								type="submit"
								className="btn btn-info btn-lg"
								onClick={() => history.push('/relogio')}
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