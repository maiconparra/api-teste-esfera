"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _uuid = require('uuid');



var _enderecomapping = require('../../database/mappings/endereco.mapping'); var _enderecomapping2 = _interopRequireDefault(_enderecomapping);
var _usermapping = require('../../database/mappings/user.mapping'); var _usermapping2 = _interopRequireDefault(_usermapping);

 class UserController {
     async index(req, res) {

        const user = await _usermapping2.default.findAll();

        return res.json(user);
    }

     async store(req, res) {

        const user = req.body;
        const endereco = req.body;

        user.id = _uuid.v4.call(void 0, );
        endereco.id = _uuid.v4.call(void 0, );
        endereco.UserId = user.id;

        const storeUser = await _usermapping2.default.create(user);
        const storeEndereco = await _enderecomapping2.default.create(endereco);

        return res.json({
            storeUser,
            storeEndereco
        });
    }
} exports.UserController = UserController;