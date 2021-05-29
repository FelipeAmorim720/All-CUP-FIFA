process.env.NODE_ENV = 'dev'; // altere para 'production' ou 'dev'

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var jogadoresRouter = require('./routes/jogadores');
var quesitosRouter = require('./routes/quesitos');
/* nao usado ----
var usuariosRouter = require('./routes/usuarios');
var leiturasRouter = require('./routes/leituras');
var testesRouter = require('./routes/testes');
var funcionariosRouter = require('./routes/funcionarios');
*/
var app = express();

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/jogadores', jogadoresRouter);
app.use('/quesitos', quesitosRouter);

/* nao usado ----
app.use('/leituras', leiturasRouter);
app.use('/usuarios', usuariosRouter);
app.use('/testes', testesRouter);
app.use('/funcionarios', funcionariosRouter);
*/

module.exports = app;
