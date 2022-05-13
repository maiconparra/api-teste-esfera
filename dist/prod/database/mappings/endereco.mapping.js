"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//Model
const endereco_model_1 = require("../../business/models/endereco.model");
class Endereco extends endereco_model_1.EnderecoModel {
    static onLoadEndereco(sequelize) {
        super.init({
            Cep: sequelize_1.DataTypes.STRING,
            Logradouro: sequelize_1.DataTypes.STRING,
            Numero: sequelize_1.DataTypes.STRING,
            Complemento: sequelize_1.DataTypes.STRING,
            Bairro: sequelize_1.DataTypes.STRING,
            Cidade: sequelize_1.DataTypes.STRING,
            Estado: sequelize_1.DataTypes.STRING,
            UserId: sequelize_1.DataTypes.STRING
        }, {
            sequelize,
            freezeTableName: true
        });
    }
    static associate(model) {
        this.belongsTo(model.User, { foreignKey: "UserId", as: "User" });
    }
}
exports.default = Endereco;
