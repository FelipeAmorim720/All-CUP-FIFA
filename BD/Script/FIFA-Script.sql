create database FIFA;
use FIFA; 

create table jogadores(
	idJogador int primary key auto_increment,
	nome varchar(40),
    email varchar(50),
    senha varchar(50),
    plataforma varchar(20),
    check (plataforma ='Xbox' or plataforma = 'PlayStation'),
	dataNasc date
);

create table campeonatos(
	idCampeonato int primary key auto_increment,
    nome varchar(40),
    tipo varchar(40),
    premiação varchar(100),
    pinCamp int,
    fkjogadores int,
    foreign key (fkjogadores) references jogadores (idJogador)
);

create table feed(
	idInfo int primary key auto_increment,
    titulo varchar (45),
    mensagem varchar(350)
);

insert into jogadores values 
	(null,'Vitor Santos','+55 41 95874-8744','vitorsantosreis@gmail.com','PlayStation', '2003-04-03'),
	(null,'Marcelo Batista','+55 61 94741-4412','marceloBatista@gmail.com','Xbox', '1998-07-30'),
	(null,'Gabriela Barbosa','+55 11 94055-2451','gabrielabarbosa@gmail.com','Xbox', '2005-06-14'),
	(null,'Felipe Amorim','+55 11 96019-6061','felipe.reis@bandtec.com','PlayStation', '2002-02-25'),
    (null,'Maria Eduarda','+55 11 95785-8788','maria.eduarda@gmail.com','Playstation','2003-06-12');
    
insert into  campeonatos values 
	(null,'Ligas Nacionais','Mata-a-Mata','2300','8745','1'),
	(null,'Ligas FUT Champions','Pontos Corridos','3500','1481','2'),
	(null,'eClub World Cup','Mata-a-Mata','3200','41455','3'),
	(null,'Ultimate Team','Pontos Corridos','5500','4441','4');
    
insert into feed values 
	(null,'Curiosidades','Em 2017, FIFA entrou para os Recordes Mundiais do Guinness como franquia de jogo de esporte mais vendida do mundo.'),
	(null,'Ultimas Noticias','ELECTRONIC ARTS anuncia expansão global multiplataforma do EA SPORTS FIFA'),
	(null,'Eventos','RULEBREAKEARS dia 20/01'),
	(null,'Ofertas e Promoções','FIFA 20 com promoção de 20%'),
	(null,'Atualizações','A partir do dia 10/03, EA iniciará a distribuição das novas versões
dos jogadores, referentes a atletas que cresceram muito de dentro dos campos reais desde o lançamento do game (em outubro de 2020)');

    select * from jogadores inner join campeonatos on fkjogadores = idjogador;
    
update jogadores set fkInfo = '1' where idJogador = '5';
