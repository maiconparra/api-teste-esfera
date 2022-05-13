import { Request, Response } from "express";
import { v4 } from "uuid";
import { ContatosInterface } from "../../business/interfaces/contatos.interface";

import { EnderecoInterface } from "../../business/interfaces/endereco.interface";
import { UserInterface } from "../../business/interfaces/user.interface";
import Contatos from "../../database/mappings/contato.mapping";
import Endereco from "../../database/mappings/endereco.mapping";
import User from "../../database/mappings/user.mapping";

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

        const user: UserInterface = req.body;

        user.id = v4();

        const storeUser = await User.create(user);

        return res.json({
            storeUser
        });
    }

    public async update(req: Request, res: Response): Promise<Response> {

        const { id, Nome, Sobrenome, CPF }: UserInterface = req.body;


        const userUpdated = await User.update({
            Nome,
            Sobrenome,
            CPF
        }, {
            where: {
                id
            }
        });
        return res.json(userUpdated);
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