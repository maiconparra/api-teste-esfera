"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//Model
const user_model_1 = require("../../business/models/user.model");
class User extends user_model_1.UserModel {
    static onLoadUser(sequelize) {
        super.init({
            Nome: sequelize_1.DataTypes.STRING,
            Sobrenome: sequelize_1.DataTypes.STRING,
            CPF: sequelize_1.DataTypes.STRING
        }, {
            sequelize,
            freezeTableName: true
        });
    }
    static associate(model) {
        this.hasMany(model.Endereco, { foreignKey: "UserId", as: "Enderecos" });
        this.hasMany(model.Contatos, { foreignKey: "UserId", as: "Contatos" });
    }
}
exports.default = User;
