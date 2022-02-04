import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const url =
  process.env.DATABASE_URL ||
  "postgres://postgres:postgres@localhost:5432/review_app";
const options = process.env.NODE_ENV === 'production' 
   ? {
     dialectOptions: {
       ssl: {
           require: process.env.NODE_ENV === 'production',
           rejectUnauthorized: false,
       },
     },
   }
 : {};

export const sequelize = new Sequelize(url, options);

export const Videos = sequelize.define(
  "video",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
        },
    movie: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);
