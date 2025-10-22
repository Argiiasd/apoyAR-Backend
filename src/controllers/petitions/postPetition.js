const { petition, user, category, media } = require("../../db");

const postPetition = async (
  title,
  description,
  infoTransf,
  categories,
  userId,
  uploadedImages
) => {
  try {
    const userFound = await user.findByPk(userId);

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

    if (uploadedImages && uploadedImages.length > 0) {
      const mediaRecords = uploadedImages.map((file) => ({
        url: file.url,
        type: "image",
        petitionId: newPetition.id,
      }));
      await media.bulkCreate(mediaRecords);
    }

    const createdPetition = await petition.findByPk(newPetition.id, {
      include: [category, { model: media, as: "media" }],
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
