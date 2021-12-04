import React from "react";
import MenuHorizontal from '../MenuHorizontal/MenuHorizontal';
import AreaDados from "../AreaDados/AreaDados";
import Rodape from "../Rodape/Rodape";
import '../Styles/Styles.css'
import Cabecalho from '../Cabecalho/Cabecalho';


export default function ContainerGeral() {
	return (
		<>
			<div className="container-geral">
				<Cabecalho/>
				<MenuHorizontal />
				<AreaDados />
				<Rodape />
			</div>
		</>
	)
}