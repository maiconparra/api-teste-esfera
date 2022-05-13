import express from "express";
import cors from 'cors';

import Routes from "./routes";
import connection from "../database";
 
class App {

    public express: express.Application;


    constructor() {
        this.express = express();
        this.conneciton();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(cors());
    }

    private routes(): void {
        this.express.use(Routes);
    }

    private conneciton(): void {
        connection;
    }

}

export default new App().express;