create database FIFA;
use FIFA;

create table jogadores(
	idJogador int primary key auto_increment,
	nome varchar(40),
    celular varchar(20),
    email varchar(50),
    plataforma varchar(20),
    check (plataforma ='Xbox' or plataforma = 'PlayStation'),
	dataNasc date
);

create table campeonato(
	idCampeonato int primary key auto_increment,
    nome varchar(40),
    tipo varchar(40),
    premiação float
);

create table info(
	idInfo int primary key auto_increment,
    titulo varchar (45),
    mensagem varchar(350)
);

--  relacionamento entre tabela jogadores e campeonato
alter table jogadores add column fkCampeonato int;
alter table jogadores add foreign key (fkCampeonato) references campeonato (idCampeonato);

--  relacionamento entre tabela jogadores e info
alter table jogadores add column fkInfo int;
alter table jogadores add foreign key (fkInfo) references info (idInfo);

insert into campeonato values 
	(null,'Ligas Nacionais','Mata-a-Mata','2300'),
	(null,'Ligas FUT Champions','Pontos Corridos','3500'),
	(null,'eClub World Cup','Mata-a-Mata','3200'),
	(null,'Ultimate Team','Pontos Corridos','5500');
    
insert into info values 
	(null,'Curiosidades','Em 2017, FIFA entrou para os Recordes Mundiais do Guinness como franquia de jogo de esporte mais vendida do mundo.'),
	(null,'Ultimas Noticias','ELECTRONIC ARTS anuncia expansão global multiplataforma do EA SPORTS FIFA'),
	(null,'Eventos','RULEBREAKEARS dia 20/01'),
	(null,'Ofertas e Promoções','FIFA 20 com promoção de 20%'),
	(null,'Atualizações','A partir do dia 10/03, EA iniciará a distribuição das novas versões
dos jogadores, referentes a atletas que cresceram muito de dentro dos campos reais desde o lançamento do game (em outubro de 2020)');

insert into jogadores values 
	(null,'Vitor Santos','+55 41 95874-8744','vitorsantosreis@gmail.com','PlayStation', '2003-04-03', '2', '5'),
	(null,'Marcelo Batista','+55 61 94741-4412','marceloBatista@gmail.com','Xbox', '1998-07-30', '1', '1'),
	(null,'Gabriela Barbosa','+55 11 94055-2451','gabrielabarbosa@gmail.com','Xbox', '2005-06-14', '3', '3'),
	(null,'Felipe Amorim','+55 11 96019-6061','felipe.reis@bandtec.com','PlayStation', '2002-02-25', '4', '4');

select j.nome, j.celular, j.email, j.plataforma, j.dataNasc, c.nome as 'Nome Campeonato', c.tipo, c.premiação, i.titulo, i.mensagem from jogadores as j 
inner join campeonato as c on j.fkCampeonato = c.idCampeonato
inner join info as i on j.fkInfo = i.idInfo;

