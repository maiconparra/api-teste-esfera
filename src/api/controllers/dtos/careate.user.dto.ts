import { ContatosInterface } from "../../../business/interfaces/contatos.interface";
import { EnderecoInterface } from "../../../business/interfaces/endereco.interface";


export interface CreateUserDto {
    id?: String;
    Nome: String;
    Sobrenome: String;
    CPF?: String;
    Enderecos: [EnderecoInterface];
    Contatos: [ContatosInterface];
}