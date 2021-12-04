const mysql = require('mysql2');
const database = 'RELOGIOS';
const fs = require('fs');
const sql = fs.readFileSync(__dirname + '/relogios.sql').toString();

const db = mysql.createConnection({
	user: 'root',
	password: '123456',
	host: 'localhost',
	port: 3306,
	multipleStatements: true
});

db.connect((err) => {
	if (err) {
		console.log('Erro ao conectar no MySQL.\n', err)
		return
	}

	db.query(sql, (err) => {
		err ?
			console.log(`Erro criar o banco ${database}.\n`, err) :
			console.log(`Banco ${database} criado com sucesso.`)
	})
})

module.exports = db;