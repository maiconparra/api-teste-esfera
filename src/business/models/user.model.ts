import { UserInterface } from '../interfaces/user.interface';

import { Model, Optional } from 'sequelize';

interface UserCreation extends Optional<UserInterface, "id"> {}

export class UserModel extends Model<UserInterface, UserCreation> implements UserInterface {
    public Nome: String;
    public Sobrenome: String;
    public CPF?: String | undefined;
}