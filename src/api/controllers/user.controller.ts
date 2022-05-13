import { Request, Response } from "express";
import { v4 } from "uuid";

import { CreateUserDto } from "./dtos/careate.user.dto";

import User from "../../database/mappings/user.mapping";
import Endereco from "../../database/mappings/endereco.mapping";
import Contatos from "../../database/mappings/contato.mapping";

export class UserController {

    public async index(req: Request, res: Response): Promise<Response> {

        const user = await User.findAll({
            include: [{
                association: 'Contatos'
            }, {
                association: 'Enderecos'
            }]
        });

        return res.json(user);
    }

    public async find(req: Request, res: Response): Promise<Response> {

        const { UserId } = req.params;

        const user = await User.findByPk(UserId, {
            include: [{
                association: 'Contatos'
            }, {
                association: 'Enderecos'
            }]
        });

        return res.json(user);
    }

    public async store(req: Request, res: Response): Promise<Response> {

        const user: CreateUserDto = req.body;

        user.id = v4();

        user.Enderecos.forEach(value => {
            value.id = v4();
        });

        user.Contatos.forEach(value => {
            value.id = v4();
        });

        const storeUser = await User.create(user, {
            include: [{
                association: 'Enderecos'
            },{
                association: 'Contatos'
            }]
        });

        return res.json({
            storeUser
        });
    }

    public async update(req: Request, res: Response): Promise<Response> {

        const user: CreateUserDto = req.body;


        const userUpdated = await User.update(user, {
            where: {
                id: user.id
            }
        });

        const userTables = {
            endereco: {},
            contatos: {}
        };

        user.Enderecos.forEach(async (value) => {
            userTables.endereco = await Endereco.update(value, {where: {id: value.id}})
        });

        user.Contatos.forEach(async (value) => {
            userTables.contatos = await Contatos.update(value, {where: {id: value.id}})
        });

        return res.json({userUpdated, userTables});
    }

    public async delete(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const userDelete = await User.destroy({
            where: {
                id
            }
        });

        return res.json({ userDelete });
    }
}