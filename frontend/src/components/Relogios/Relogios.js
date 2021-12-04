import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaRelogios from "../Tabelas/TabelaRelogios";
import '../Styles/Styles.css'

export default function Relogios() {

	const [relogio, setRelogio] = useState([])
	
	useEffect(() => {
		urlApi.get('relogio')
			.then(response => response.data)
			.then(response => setRelogio(response));
	}, [])

	return (
		<>
			<form>
				<div className="div-form">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<h1> Modelos de Relógios </h1>
							</div>
						</div>
					</div>
					<div>
						<TabelaRelogios items={relogio} chave={'/relogio/'}	/>
					</div>
				</div>
			</form>
		</>
	)
}