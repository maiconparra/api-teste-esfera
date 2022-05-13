"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

//Model
var _enderecomodel = require('../../business/models/endereco.model');

 class Endereco extends _enderecomodel.EnderecoModel {

    static onLoadEndereco(sequelize) {
        super.init({
            Cep: _sequelize.DataTypes.STRING,
            Logradouro: _sequelize.DataTypes.STRING,
            Numero: _sequelize.DataTypes.STRING,
            Complemento: _sequelize.DataTypes.STRING,
            Bairro: _sequelize.DataTypes.STRING,
            Cidade: _sequelize.DataTypes.STRING,
            Estado: _sequelize.DataTypes.STRING,
            UserId: _sequelize.DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true
        })
    }

    static associate(model) {
        this.belongsTo(model.User, { foreignKey: "UserId", as: "User" });
    }

} exports.default = Endereco;