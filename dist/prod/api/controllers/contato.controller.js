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
exports.ContatoController = void 0;
const uuid_1 = require("uuid");
const contato_mapping_1 = __importDefault(require("../../database/mappings/contato.mapping"));
class ContatoController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield contato_mapping_1.default.findAll({
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
            const user = yield contato_mapping_1.default.findAll({
                where: {
                    UserId
                },
                include: {
                    association: 'Users'
                }
            });
            return res.json(user);
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const user = yield contato_mapping_1.default.findByPk(id, {
                include: {
                    association: 'User'
                }
            });
            return res.json(user);
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contato = req.body;
            contato.id = (0, uuid_1.v4)();
            const storeContato = yield contato_mapping_1.default.create(contato);
            return res.json({
                storeContato
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, Telefone, Email } = req.body;
            const contatoUpdated = yield contato_mapping_1.default.update({
                Telefone,
                Email
            }, {
                where: {
                    id
                }
            });
            return res.json(contatoUpdated);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const conatoDelete = yield contato_mapping_1.default.destroy({
                where: {
                    id
                }
            });
            return res.json({ conatoDelete });
        });
    }
}
exports.ContatoController = ContatoController;
