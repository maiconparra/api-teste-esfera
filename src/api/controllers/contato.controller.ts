import { Request, Response } from "express";
import { v4 } from "uuid";
import { ContatosInterface } from "../../business/interfaces/contatos.interface";

import Contatos from "../../database/mappings/contato.mapping";

export class ContatoController {

    public async index(req: Request, res: Response): Promise<Response> {

        const user = await Contatos.findAll({
            include: {
                association: 'User'
            }
        });

        return res.json(user);
    }

    public async findUserId(req: Request, res: Response): Promise<Response> {

        const { UserId } = req.params;

        const user = await Contatos.findAll({
            where: {
                UserId
            },
            include: {
                association: 'Users'
            }
        });

        return res.json(user);
    }

    public async find(req: Request, res: Response): Promise<Response> {

        const { id } = req.body;

        const user = await Contatos.findByPk(id, {
            include: {
                association: 'User'
            }
        });

        return res.json(user);
    }

    public async store(req: Request, res: Response): Promise<Response> {

        const contato: ContatosInterface = req.body;

        contato.id = v4();

        const storeContato = await Contatos.create(contato);

        return res.json({
            storeContato
        });
    }

    public async update(req: Request, res: Response): Promise<Response> {

        const { id, Telefone, Email }: ContatosInterface = req.body;


        const contatoUpdated = await Contatos.update({
            Telefone,
            Email
        }, {
            where: {
                id
            }
        });

        return res.json(contatoUpdated);
    }

    public async delete(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const conatoDelete = await Contatos.destroy({
            where: {
                id
            }
        });

        return res.json({ conatoDelete });
    }
}