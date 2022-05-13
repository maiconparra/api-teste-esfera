"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//Model
const contato_model_1 = require("../../business/models/contato.model");
class Contatos extends contato_model_1.ContatosModel {
    static onLoadContato(sequelize) {
        super.init({
            Telefone: sequelize_1.DataTypes.STRING,
            Email: sequelize_1.DataTypes.STRING,
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
exports.default = Contatos;
