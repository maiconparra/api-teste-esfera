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
exports.EnderecoController = void 0;
const uuid_1 = require("uuid");
const endereco_mapping_1 = __importDefault(require("../../database/mappings/endereco.mapping"));
class EnderecoController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield endereco_mapping_1.default.findAll({
                include: {
                    association: 'User'
                }
            });
            return res.json(user);
        });
    }
    findUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { UserId } = req.params;
            const user = yield endereco_mapping_1.default.findAll({
                where: {
                    UserId
                }
            });
            return res.json(user);
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const user = yield endereco_mapping_1.default.findByPk(id, {
                include: {
                    association: 'User'
                }
            });
            return res.json(user);
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const endereco = req.body;
            endereco.id = (0, uuid_1.v4)();
            const storeEndereco = yield endereco_mapping_1.default.create(endereco);
            return res.json({
                storeEndereco
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, Logradouro, Cep, Numero, Complemento, Bairro, Cidade, Estado } = req.body;
            const enderecoUpdated = yield endereco_mapping_1.default.update({
                Logradouro,
                Cep,
                Numero,
                Complemento,
                Bairro,
                Cidade,
                Estado
            }, {
                where: {
                    id
                }
            });
            return res.json(enderecoUpdated);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conatoDelete = yield endereco_mapping_1.default.destroy({
                where: {
                    id
                }
            });
            return res.json({ conatoDelete });
        });
    }
}
exports.EnderecoController = EnderecoController;
