import { DataTypes, Model, Optional  } from "sequelize";
import sequelize  from "../config/database";
  
// define an interface of user attribute

interface UserAttributes{
    id: number;
    name: string;
    email: string;
    password: string;
}

// define an interface of user creation attributes (optional id)
interface UserCreationAttribute extends Optional<UserAttributes, "id"> {}

// define a class that extend the sequelize model class 
class User 
 extends Model<UserAttributes, UserCreationAttribute>
 implements UserAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

// initilize the user model

User.init(
    {
     id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
     },
     name: {
        type: DataTypes.STRING(128),
        allowNull: false
     },
     email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true
     },
     password: {
        type: DataTypes.STRING(128),
        allowNull: false
     }, 
    },
    {
        tableName: "users",
        sequelize
    }
);

export default User;