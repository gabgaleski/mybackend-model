import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
    import db from '.';
  
  class UsersModelSequelize extends Model<InferAttributes<UsersModelSequelize>,
  InferCreationAttributes<UsersModelSequelize>> {
    declare id: CreationOptional<number>;
    declare username: string;
    declare email: string;
    declare password: string;
  }
  
  UsersModelSequelize.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
    underscored: true,
  });

  
  export default UsersModelSequelize;