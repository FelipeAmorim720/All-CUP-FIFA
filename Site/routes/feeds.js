var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Feed = require('../models').Feed;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/postar/:idJogador', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
	let idJogador = req.params.idJogador;

    Feed.create({ 
        mensagem: req.body.mensagem,
        fkjogador: idJogador
    }).then(resultado => {
        console.log("Post realizado com sucesso!!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO')
        console.error(erro);
        res.status(500).send(erro.message);
    })
})

/* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
router.get('/', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
    let instrucaoSql = `SELECT
    jogadores.nome,
    mensagem
    from 
    feed
    inner join 
    jogadores
    on feed.fkjogador = jogadores.idJogador
    order by feed.idInfo DESC;`;

	sequelize.query(instrucaoSql, {
		model: Feed,
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


/* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
router.get('/:idJogador', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
	var idJogador = req.params.idJogador;


    let instrucaoSql = `SELECT
    jogadores.nome,
    mensagem
    from feed
    inner join jogadores
    on feed.fkjogador = jogadores.idJogador
    where fkjogador = ${idJogador}
    order by feed.idInfo DESC;`

	sequelize.query(instrucaoSql, {
		model: Feed,
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
