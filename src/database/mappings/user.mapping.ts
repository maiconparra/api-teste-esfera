import { DataTypes } from "sequelize";

//Model
import { UserModel } from "../../business/models/user.model";

export default class User extends UserModel {

    static onLoadUser(sequelize: any): void {
        super.init({
            Nome: DataTypes.STRING,
            Sobrenome: DataTypes.STRING,
            CPF: DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true
        })
    }

    static associate(model: any): void {
        this.hasMany(model.Endereco, { foreignKey: "UserId", as: "Enderecos" });
        this.hasMany(model.Contatos, { foreignKey: "UserId", as: "Contatos" });
    }

}