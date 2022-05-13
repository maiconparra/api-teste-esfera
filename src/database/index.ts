import { Sequelize } from 'sequelize';

import 'dotenv/config';

console.log('username: ', `${process.env.DIALECT}://${process.env.USERDATABASE}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DATABASEPORT}/${process.env.DATABASE}`);

//Mappings
import User from './mappings/user.mapping';
import Endereco from './mappings/endereco.mapping';
import Contatos from './mappings/contato.mapping';

const connection = new Sequelize(`${process.env.DIALECT}://${process.env.USERDATABASE}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DATABASEPORT}/${process.env.DATABASE}`);

User.onLoadUser(connection);
Endereco.onLoadEndereco(connection);
Contatos.onLoadContato(connection);


User.associate(connection.models);
Endereco.associate(connection.models);
Contatos.associate(connection.models);

export default connection;
