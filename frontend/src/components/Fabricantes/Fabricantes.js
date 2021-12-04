import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaFabricantes from "../Tabelas/TabelaFabricantes";
import '../Styles/Styles.css'


export default function Fabricantes() {

	const [fabricante, setFabricante] = useState([])
	
	useEffect(() => {
		urlApi.get('fabricante')
			.then(response => response.data)
			.then(response => setFabricante(response));
	}, [])

	return (
		<>
			<form>
				<div className="div-form">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<h1> Fabricantes de Relógios </h1>
							</div>
						</div>
					</div>
					<div>
						<TabelaFabricantes items={fabricante} chave={'/fabricante/'}/>
					</div>
				</div>
			</form>
		</>
	)
}