const { Sequelize } = require("sequelize");
require("dotenv").config();
const pg = require("pg");

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/${DB_NAME}`,
  { logging: false, dialect: "postgres", dialectModule: pg }
);

const UserModel = require("./models/userModel")(sequelize);
const PetitionModel = require("./models/petitionModel")(sequelize);
const MediaModel = require("./models/mediaModel")(sequelize);

const { user, petition, media } = sequelize.models;

user.hasMany(petition);
petition.belongsTo(user);
petition.hasMany(media);
media.belongsTo(petition);

module.exports = {
  user,
  petition,
  media,
  conn: sequelize,
};
