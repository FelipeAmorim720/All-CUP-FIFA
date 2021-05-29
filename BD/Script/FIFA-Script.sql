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

select * from jogadores;
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
    mensagem varchar(350),
    fkjogador int,
    foreign key (fkjogador) references jogadores (idJogador)
);

insert into jogadores values 
	(null,'Vitor Santos','vitorsantosreis@gmail.com','153045','PlayStation', '2003-04-03'),
	(null,'Marcelo Batista','marceloBatista@gmail.com','123456','Xbox', '1998-07-30'),
	(null,'Gabriela Barbosa','gabrielabarbosa@gmail.com','87654','Xbox', '2005-06-14'),
	(null,'Felipe Amorim','felipe.reis@bandtec.com','6015','PlayStation', '2002-02-25'),
    (null,'Maria Eduarda','maria.eduarda@gmail.com','1515','Playstation','2003-06-12');
    
insert into  campeonatos values 
	(null,'Ligas Nacionais','Mata-a-Mata','2300','8745','1'),
	(null,'Ligas FUT Champions','Pontos Corridos','3500','1481','2'),
	(null,'eClub World Cup','Mata-a-Mata','3200','41455','3'),
	(null,'Ultimate Team','Pontos Corridos','5500','4441','4');
    
    insert into feed values 
	(null,'Curiosidades','Em 2017, FIFA entrou para os Recordes Mundiais do Guinness como franquia de jogo de esporte mais vendida do mundo.','1'),
	(null,'Ultimas Noticias','ELECTRONIC ARTS anuncia expansão global multiplataforma do EA SPORTS FIFA','2'),
	(null,'Eventos','RULEBREAKEARS dia 20/01', '4'),
	(null,'Ofertas e Promoções','FIFA 20 com promoção de 20%','5'),
	(null,'Atualizações','A partir do dia 10/03, EA iniciará a distribuição das novas versões
dos jogadores, referentes a atletas que cresceram muito de dentro dos campos reais desde o lançamento do game (em outubro de 2020)','3');


    select * from campeonatos;
    
    SELECT 
    nome,
    tipo,
	premiação,
	pinCamp
    FROM campeonatos;
    
    select * from jogadores inner join campeonatos on fkjogadores = idjogador;
	update jogadores set fkInfo = '1' where idJogador = '5';
