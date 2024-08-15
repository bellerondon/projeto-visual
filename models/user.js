const Sequelize = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize) =>{//o mudule exporta da tabela
    const User = sequelize.define('User', { //a classe vai ser espelada do banco de uma tabela
        id:{
            type:Sequelize.INTEGER,
            autoincrement: true,
            primaryKay:true,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            unique:true,
            allowNull:false
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        }

        
    }); // metodo que ainda não tem nome (anonimo) o difine cria a nossa tabela]
    return User;
};