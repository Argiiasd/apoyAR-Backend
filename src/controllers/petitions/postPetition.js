const { petition } = require("../../db");
const { user } = require("../../db");
const { category } = require("../../db");

const postPetition = async (
  title,
  description,
  infoTransf,
  categories,
  userId
) => {
  try {
    const userFound = user.findByPk(userId);

    if (!userFound) {
      return {
        success: false,
        message: "Usuario no encontrado",
      };
    }

    const newPetition = await petition.create({
      title: title,
      description: description,
      infoTransf: infoTransf,
      userId: userId,
    });

    const categoryRecords = await category.findAll({
      where: { name: categories },
    });

    await newPetition.addCategories(categoryRecords);

    const createdPetition = await petition.findByPk(newPetition.id, {
      include: category,
    });

    return {
      success: true,
      message: "Petición creada con éxito",
      data: createdPetition,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al crear la petición",
    };
  }
};

module.exports = postPetition;
