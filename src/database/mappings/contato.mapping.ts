import { DataTypes } from "sequelize";

//Model
import { ContatosModel } from "../../business/models/contato.model";

export default class Contatos extends ContatosModel {

    static onLoadContato(sequelize: any): void {
        super.init({
            Telefone: DataTypes.STRING,
            Email: DataTypes.STRING,
            UserId: DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true
        })
    }

    static associate(model: any): void {
        this.belongsTo(model.User , { foreignKey: "UserId", as: "User" });
    }

}