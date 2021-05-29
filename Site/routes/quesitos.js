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


/* Verificação de usuário */
// router.get('/sessao/:login', function(req, res, next) {
// 	let login_backend = req.params.login_html;
// 	console.log(`Verificando se o usuário ${login_backend} tem sessão`);

// 	let tem_sessao = false;
// 	for (let u=0; u<sessoes.length; u++) {
// 		if (sessoes[u] == login_backend) {
// 			tem_sessao = true;
// 			break;
// 		}
// 	}

// 	if (tem_sessao) {
// 		let mensagem = `Usuário ${login_backend} possui sessão ativa!`;
// 		console.log(mensagem);
// 		res.send(mensagem);
// 	} else {
// 		res.sendStatus(403);
// 	}

// });


/* Logoff de usuário */
// router.get('/sair/:login', function(req, res, next) {
// 	let login_backend = req.params.login_html;
// 	console.log(`Finalizando a sessão do usuário ${login_backend}`);
// 	let nova_sessoes = []
// 	for (let u=0; u<sessoes.length; u++) {
// 		if (sessoes[u] != login_backend) {
// 			nova_sessoes.push(sessoes[u]);
// 		}
// 	}
// 	sessoes = nova_sessoes;
// 	res.send(`Sessão do usuário ${login_backend} finalizada com sucesso!`);
// });


/* Recuperar todos os usuários */
// router.get('/', function(req, res, next) {
// 	console.log('Recuperando todos os usuários');
// 	Funcionario.findAndCountAll().then(resultado => {
// 		console.log(`${resultado.count} registros`);

// 		res.json(resultado.rows);
// 	}).catch(erro => {
// 		console.error(erro);
// 		res.status(500).send(erro.message);
//   	});
// });

module.exports = router;
