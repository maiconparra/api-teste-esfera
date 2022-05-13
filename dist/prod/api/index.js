"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = __importDefault(require("../database"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.conneciton();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: true }));
        this.express.use((0, cors_1.default)());
    }
    routes() {
        this.express.use(routes_1.default);
    }
    conneciton() {
        database_1.default;
    }
}
exports.default = new App().express;
