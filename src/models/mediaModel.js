const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("media", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("image", "video"),
      allowNull: false,
    },
  });
};
