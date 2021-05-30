var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Quesito = require('../models').Quesito;

router.get('/', function (req, res, next) {
    console.log('Recuperando Total de Campeonatos!');

    let instrucaoSql = `select
    count(1) as Todos,
    max(premiação) as Maior
    from campeonatos`;

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
