import { EnderecoInterface } from "../interfaces/endereco.interface";

import { Model, Optional } from "sequelize";

interface EnderecoCreation extends Optional<EnderecoInterface, 'id'> {}

export class EnderecoModel extends Model<EnderecoInterface, EnderecoCreation> implements EnderecoInterface{
   public Cep: String;
   public Logradouro: String;
   public Numero: String;
   public Complemento?: String | undefined;
   public Bairro: String;
   public Cidade: String;
   public Estado: String;
   public UserId: String;
}