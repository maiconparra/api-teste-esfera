"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require("dotenv/config");
console.log('username: ', `${process.env.DIALECT}://${process.env.USERDATABASE}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`);
//Mappings
const user_mapping_1 = __importDefault(require("./mappings/user.mapping"));
const endereco_mapping_1 = __importDefault(require("./mappings/endereco.mapping"));
const contato_mapping_1 = __importDefault(require("./mappings/contato.mapping"));
const connection = new sequelize_1.Sequelize(`${process.env.DIALECT}://${process.env.USERDATABASE}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`);
user_mapping_1.default.onLoadUser(connection);
endereco_mapping_1.default.onLoadEndereco(connection);
contato_mapping_1.default.onLoadContato(connection);
user_mapping_1.default.associate(connection.models);
endereco_mapping_1.default.associate(connection.models);
contato_mapping_1.default.associate(connection.models);
exports.default = connection;
