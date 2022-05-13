"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

//Model
var _usermodel = require('../../business/models/user.model');

 class User extends _usermodel.UserModel {

    static onLoadUser(sequelize) {
        super.init({
            Nome: _sequelize.DataTypes.STRING,
            Sobrenome: _sequelize.DataTypes.STRING,
            CPF: _sequelize.DataTypes.STRING,
            Email: _sequelize.DataTypes.STRING,
            Telefone: _sequelize.DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true
        })
    }

    static associate(model) {
        this.hasOne(model.Endereco, { foreignKey: "UserId", as: "Endereco" });
    }

} exports.default = User;