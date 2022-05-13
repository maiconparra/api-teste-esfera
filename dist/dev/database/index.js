"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');

//Mappings
var _usermapping = require('./mappings/user.mapping'); var _usermapping2 = _interopRequireDefault(_usermapping);
var _enderecomapping = require('./mappings/endereco.mapping'); var _enderecomapping2 = _interopRequireDefault(_enderecomapping);

const connection = new (0, _sequelize.Sequelize)('mysql://root:12345@localhost:3306/EsferaTesteDevelopment');

_usermapping2.default.onLoadUser(connection);
_enderecomapping2.default.onLoadEndereco(connection);


_usermapping2.default.associate(connection.models);
_enderecomapping2.default.associate(connection.models);

exports. default = connection;
