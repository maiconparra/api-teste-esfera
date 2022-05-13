import { Request, Response } from "express";
import { v4 } from "uuid";
import { ContatosInterface } from "../../business/interfaces/contatos.interface";

import { EnderecoInterface } from "../../business/interfaces/endereco.interface";
import { UserInterface } from "../../business/interfaces/user.interface";
import Endereco from "../../database/mappings/endereco.mapping";
import User from "../../database/mappings/user.mapping";

export class EnderecoController {

    public async index(req: Request, res: Response): Promise<Response> {

        const user = await Endereco.findAll({
            include: {
                association: 'User'
            }
        });

        return res.json(user);
    }

    public async findUserId(req: Request, res: Response): Promise<Response> {

        const { UserId } = req.params;

        const user = await Endereco.findAll({
            where: {
                UserId
            }
        });

        return res.json(user);
    }

    public async find(req: Request, res: Response): Promise<Response> {

        const { id } = req.body;

        const user = await Endereco.findByPk(id, {
            include: {
                association: 'User'
            }
        });

        return res.json(user);
    }

    public async store(req: Request, res: Response): Promise<Response> {

        const endereco: EnderecoInterface = req.body;

        endereco.id = v4();

        const storeEndereco = await Endereco.create(endereco);

        return res.json({
            storeEndereco
        });
    }

    public async update(req: Request, res: Response): Promise<Response> {

        const { id, Logradouro, Cep, Numero, Complemento, Bairro, Cidade, Estado }: EnderecoInterface = req.body;


        const enderecoUpdated = await Endereco.update({
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
    }

    public async delete(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const conatoDelete = await Endereco.destroy({
            where: {
                id
            }
        });

        return res.json({ conatoDelete });
    }
}