"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const uuid_1 = require("uuid");
const user_mapping_1 = __importDefault(require("../../database/mappings/user.mapping"));
const endereco_mapping_1 = __importDefault(require("../../database/mappings/endereco.mapping"));
const contato_mapping_1 = __importDefault(require("../../database/mappings/contato.mapping"));
class UserController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_mapping_1.default.findAll({
                include: [{
                        association: 'Contatos'
                    }, {
                        association: 'Enderecos'
                    }]
            });
            return res.json(user);
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { UserId } = req.params;
            const user = yield user_mapping_1.default.findByPk(UserId, {
                include: [{
                        association: 'Contatos'
                    }, {
                        association: 'Enderecos'
                    }]
            });
            return res.json(user);
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            user.id = (0, uuid_1.v4)();
            user.Enderecos.forEach(value => {
                value.id = (0, uuid_1.v4)();
            });
            user.Contatos.forEach(value => {
                value.id = (0, uuid_1.v4)();
            });
            const storeUser = yield user_mapping_1.default.create(user, {
                include: [{
                        association: 'Enderecos'
                    }, {
                        association: 'Contatos'
                    }]
            });
            return res.json({
                storeUser
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const userUpdated = yield user_mapping_1.default.update(user, {
                where: {
                    id: user.id
                }
            });
            const userTables = {
                endereco: {},
                contatos: {}
            };
            user.Enderecos.forEach((value) => __awaiter(this, void 0, void 0, function* () {
                userTables.endereco = yield endereco_mapping_1.default.update(value, { where: { id: value.id } });
            }));
            user.Contatos.forEach((value) => __awaiter(this, void 0, void 0, function* () {
                userTables.contatos = yield contato_mapping_1.default.update(value, { where: { id: value.id } });
            }));
            return res.json({ userUpdated, userTables });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const userDelete = yield user_mapping_1.default.destroy({
                where: {
                    id
                }
            });
            return res.json({ userDelete });
        });
    }
}
exports.UserController = UserController;
