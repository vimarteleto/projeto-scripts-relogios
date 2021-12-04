import React from "react";
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Relogios from "../Relogios/Relogios";
import RelogiosEditar from "../Relogios/RelogiosEditar";
import Fabricantes from "../Fabricantes/Fabricantes";
import FabricantesEditar from "../Fabricantes/FabricantesEditar";

export default function AreaDados() {
	return (
		<>
			<div className="area-dados">
				<Switch>
					<Route
						exact path="/relogio"
						component={Relogios}></Route>
					<Route
						exact path="/relogio/:id"
						component={RelogiosEditar}></Route>
					<Route
						exact path="/fabricante"
						component={Fabricantes}></Route>
					<Route
						exact path="/fabricante/:id"
						component={FabricantesEditar}></Route>
				</Switch>
			</div>
		</>
	)
}