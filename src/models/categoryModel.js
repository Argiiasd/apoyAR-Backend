const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("category", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    })
}