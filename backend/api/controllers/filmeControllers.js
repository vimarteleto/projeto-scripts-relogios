const db = require('../../config/db.js');

module.exports = {
  filmeGetAll,
  filmeGetById,
  filmeNew,
  filmeEdit
}

function filmeGetAll(require, response) {
  console.log('Rota Filmes Encontrada!');
  const sqlGet = `SELECT * FROM  filme`
  db.query(sqlGet, (err, result) => {
    if (err) console.log(err);
    response.json(result)
  })
};

function filmeGetById(require, response) {
  const id = require.params.id
  console.log('Parametro Esperado Get: ' + id);
  const sqlGet = `SELECT * FROM filme WHERE fil_codigo = ?`

  db.query(sqlGet, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.json(result);
    }
  })
}

function filmeNew(require, response) {
  const dados = require.body
  console.log(dados);
  console.log(`Gravando Novo Filme!`);

  dados.fil_codigo = null;

  const sqlPost = `INSERT INTO filme SET ?`

  db.query(sqlPost, dados, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}


function filmeEdit(require, response) {
  const dados = require.body  
  console.log("Alterando Registro de Filmes...", dados);

  const sqlPut = "UPDATE filme SET fil_nomeFilme = '" + dados.fil_nomeFilme +
    "' , fil_produtora = '" + dados.fil_produtora +
    "' , fil_diretor = '" + dados.fil_diretor +
    "' , fil_anoFilmagem = '" + dados.fil_anoFilmagem +
    "' , fil_pais = '" + dados.fil_pais +
    "' WHERE fil_codigo = '" + dados.fil_codigo + "'"

  db.query(sqlPut, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}
