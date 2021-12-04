import React from 'react';
import '../Styles/Styles.css'

export default function TabelaFabricantes(props) {

	function getTable() {

		const arrayRegistros = props.items;
		console.log(arrayRegistros);

		return arrayRegistros.map((item, i) => {

			return (
				<tr	key={item.fab_codigo}>
					<td> {item.fab_codigo} </td>
					<td> {item.fab_nome} </td>
					<td> {item.fab_fantasia} </td>
					<td> {item.fab_pais} </td>
					<td> {item.fab_fundacao} </td>
					<td> 
						<a className="btn btn-info" href={props.chave + item.fab_codigo} > Editar </a>
					</td>
				</tr>
			)
		})
	}

	return (
		<div className='form-control'>
			<table className="table table-striped table-hover">
				<thead id="cabecalho_rel">
					<tr>
						<th scope="col"> Código </th>
						<th scope="col"> Fabricante </th>
						<th scope="col"> Fantasia </th>
						<th scope="col"> Origem </th>
						<th scope="col"> Fundação </th>
						<th scope="col"><a href={props.chave + '0'} className="btn btn-info btn-block" > Novo </a></th>
					</tr>
				</thead>
				<tbody>
					{getTable()}
				</tbody>
			</table>
		</div>
	)
}