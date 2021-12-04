const db = require('../../config/db.js')

function getAllFabricantes(req, res) {
	console.log('Rota para tabela RELOGIOS encontrada.')
	const sql = `SELECT * FROM  FABRICANTES`
	db.query(sql, (err, result) => {
		err ? console.log(err) : res.json(result)
	})
}

function getFabricantesById(req, res) {
	const id = req.params.id
	console.log('Parâmetro esperado: ' + id)
	const sql = `SELECT * FROM FABRICANTES WHERE fab_codigo = ?`

	db.query(sql, [id], (err, result) => {
		err ? console.log(err) : res.json(result)
	})
}

function createFabricante(req, res) {
	const data = req.body
	console.log('Inserindo dados na tabela FABRICANTES.')

	data.fab_codigo = null

	const sql = `INSERT INTO FABRICANTES SET ?`

	db.query(sql, [data], (err, result) => {
		err ? console.log(err) : res.send(result)
	})
}


function editFabricante(req, res) {
	const data = req.body
	console.log(data)
	console.log('Alterando dados na tabela FABRICANTES.', data)

	const sql = "UPDATE FABRICANTES SET fab_nome = '" + data.fab_nome +
		"' , fab_fantasia = '" + data.fab_fantasia +
		"' , fab_pais = '" + data.fab_pais +
		"' , fab_fundacao = '" + data.fab_fundacao +
		"' WHERE fab_codigo = '" + data.fab_codigo + "'"

	db.query(sql, (err, result) => {
		err ? console.log(err) : res.send(result)
	})
}


module.exports = {
	getAllFabricantes,
	getFabricantesById,
	createFabricante,
	editFabricante
}