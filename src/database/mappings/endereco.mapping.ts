import { DataTypes } from "sequelize";

//Model
import { EnderecoModel } from "../../business/models/endereco.model";

export default class Endereco extends EnderecoModel {

    static onLoadEndereco(sequelize: any): void {
        super.init({
            Cep: DataTypes.STRING,
            Logradouro: DataTypes.STRING,
            Numero: DataTypes.STRING,
            Complemento: DataTypes.STRING,
            Bairro: DataTypes.STRING,
            Cidade: DataTypes.STRING,
            Estado: DataTypes.STRING,
            UserId: DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true
        })
    }

    static associate(model: any): void {
        this.belongsTo(model.User, { foreignKey: "UserId", as: "User" });
    }

}