const db = require('../../config/db.js');

module.exports = {
  elencoGetAll,
  elencoGetById,
  elencoNew,
  elencoEdit
}

function elencoGetAll(require, response) {
  console.log('Rota Elenco Encontrada!');
  const sqlGet = `SELECT * FROM  elenco`
  db.query(sqlGet, (err, result) => {
    if (err) console.log(err);
    response.json(result)
  })
};

function elencoGetById(require, response) {
  const id = require.params.id
  console.log('Parametro Esperado Get: ' + id);
  const sqlGet = `SELECT * FROM elenco WHERE ele_codigo = ?`

  db.query(sqlGet, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.json(result);
    }
  })
}

function elencoNew(require, response) {
  const dados = require.body
  console.log(`Gravando Novo Ator!`);

  dados.ele_codigo = null;

  const sqlPost = `INSERT INTO elenco SET ?`

  db.query(sqlPost, [dados], (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}


function elencoEdit(require, response) {
  const dados = require.body
  console.log(dados);
  console.log("Alterando Registro de Atores...", dados);

  const sqlPut = "UPDATE elenco SET ele_nome = '" + dados.ele_nome +
    "' , ele_sexo = '" + dados.ele_sexo +
    "' , ele_nacionalidade = '" + dados.ele_nacionalidade +
    "' , ele_dtNascimento = '" + dados.ele_dtNascimento +
    "' , fil_codigo = '" + dados.fil_codigo +
    "' WHERE ele_codigo = '" + dados.ele_codigo + "'"

  db.query(sqlPut, (err, result) => {
    if (err) console.log(err);
    response.send(result)
  })
}
