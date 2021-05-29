'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {  //-----------------------------------------------------
    let Jogador = sequelize.define('Jogador',{
		idJogador: {
			field: 'idJogador',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		plataforma: {
			field: 'plataforma',
			type: DataTypes.STRING,
			allowNull: false
		},
		dataNasc: {
			field: 'dataNasc',
			type: DataTypes.DATE,
			allowNull: false
		}
	}, 
	{
		tableName: 'jogadores', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Jogador;
};
