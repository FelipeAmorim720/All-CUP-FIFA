'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {  //-----------------------------------------------------
    let Quesito = sequelize.define('Quesito',{
		idCampeonato: {
			field: 'idCampeonato',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		tipo: {
			field: 'tipo',
			type: DataTypes.STRING,
			allowNull: false
		},
		premiação: {
			field: 'premiação',
			type: DataTypes.STRING,
			allowNull: false
		},
		pinCamp: {
			field: 'pinCamp',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'campeonatos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Quesito;
};
