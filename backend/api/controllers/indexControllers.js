const db = require('../../config/db.js')

function indexControllers(req, res) {
  	console.log('Rota raíz encontrada!')
  	res.json('Rota raíz encontrada!')
}

module.exports = {
  	indexControllers
}
