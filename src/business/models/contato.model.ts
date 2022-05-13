import { ContatosInterface } from "../interfaces/contatos.interface";

import { Model, Optional } from "sequelize";

interface ContatoCreation extends Optional<ContatosInterface, 'id'> {}

export class ContatosModel extends Model<ContatosInterface, ContatoCreation> implements ContatosInterface{
    Telefone: String;
    Email?: String;
    UserId: String;
}