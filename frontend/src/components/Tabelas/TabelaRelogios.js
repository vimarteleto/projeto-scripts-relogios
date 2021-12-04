import React from 'react';
import '../Styles/Styles.css'

export default function TabelaRelogios(props) {

	function getTable() {

		const arrayRegistros = props.items;
		console.log(arrayRegistros);

		return arrayRegistros.map((item, i) => {

			return (
				<tr	key={item.rel_codigo}>
					<td> {item.rel_codigo} </td>
					<td> {item.rel_descricao} </td>
					<td> {item.rel_modelo} </td>
					<td> {item.rel_tipo} </td>
					<td> {item.rel_pulseira} </td>
					<td> {item.rel_garantia} meses</td>
					<td> {item.fab_codigo} </td>
					<td>
						<a className="btn btn-info"	href={props.chave + item.rel_codigo} > Editar </a>
					</td>
				</tr>
			)
		})
	}

	return (
		<div className='form-control'>
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th scope="col"> Código </th>
						<th scope="col"> Descrição </th>
						<th scope="col"> Modelo </th>
						<th scope="col"> Tipo </th>
						<th scope="col"> Pulseira </th>
						<th scope="col"> Garantia </th>
						<th scope="col"> Fabricante </th>
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