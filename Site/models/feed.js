'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Feed = sequelize.define('Feed',{	
		idInfo: {
			field: 'idInfo',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        mensagem: {
            field: 'mensagem',
            type: DataTypes.STRING,
            allowNull: false
        },
        fkjogador: {
            field: 'fkjogador',
            type: DataTypes.INTEGER,
            allowNull: false
        }
	}, 
	{
		tableName: 'feed', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Feed;
};
