var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Quesito = require('../models').Quesito;


// ------------------------------------------------------------------------------------------------------
/* Cadastrar usuário */
router.post('/EnvioCamp', function (req, res, next) {
	console.log('Criando um usuário');

	Quesito.create({
		nome: req.body.nome_camp, // ----------------------------------------------
		tipo: req.body.tipo_camp, // ----------------------------------------------
		premiação: req.body.premio_camp, // ----------------------------------------------
		pinCamp: req.body.chave_camp // ----------------------------------------------
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

// SELECT nos campeonatos
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os campeonatos');
	
    let instrucaoSql = `SELECT 
    nome,
    tipo,
	premiação,
	pinCamp
    FROM campeonatos`;

	sequelize.query(instrucaoSql, {
		model: Quesito,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;


