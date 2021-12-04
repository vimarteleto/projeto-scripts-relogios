const db = require('../../config/db.js')

function getAllRelogios(req, res) {
	console.log('Rota para tabela RELOGIOS encontrada.')
	const sql = `SELECT * FROM  RELOGIOS`
	db.query(sql, (err, result) => {
		err ? console.log(err) : res.json(result)
	})
}

function getRelogioById(req, res) {
	const id = req.params.id
	console.log('Parâmetro esperado: ' + id)
	const sql = `SELECT * FROM RELOGIOS WHERE rel_codigo = ?`

	db.query(sql, [id], (err, result) => {
		err ? console.log(err) : res.json(result)
	})
}

function createRelogio(req, res) {
	const data = req.body
	console.log(data)
	console.log('Inserindo dados na tabela RELOGIOS.')

	data.rel_codigo = null

	const sql = `INSERT INTO RELOGIOS SET ?`

	db.query(sql, data, (err, result) => {
		err ? console.log(err) : res.send(result)
	})
}


function editRelogio(req, res) {
	const data = req.body
	console.log('Alterando dados na tabela RELOGIOS.', data)

	const sql = "UPDATE RELOGIOS SET rel_descricao = '" + data.rel_descricao +
		"' , rel_modelo = '" + data.rel_modelo +
		"' , rel_tipo = '" + data.rel_tipo +
		"' , rel_pulseira = '" + data.rel_pulseira +
		"' , rel_garantia = '" + data.rel_garantia +
		"' , fab_codigo = '" + data.fab_codigo +
		"' WHERE rel_codigo = '" + data.rel_codigo + "'"

	db.query(sql, (err, result) => {
		err ? console.log(err) : res.send(result)
	})
}


module.exports = {
	getAllRelogios,
	getRelogioById,
	createRelogio,
	editRelogio
}