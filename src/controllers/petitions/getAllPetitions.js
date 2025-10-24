const { petition, category, user, media } = require("../../db");

const getAllPetitions = async (page, size) => {
  try {
    const pageNum = Math.max(1, parseInt(page) || 1);
    const limit = Math.max(1, parseInt(size) || 10);
    const offset = (pageNum - 1) * limit;
    
    const { count, rows } = await petition.findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: category,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
        {
          model: media,
          attributes: ["id", "url", "type"],
        },
        {
          model: user,
          attributes: ["id", "username", "profilePicture"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    if (!rows || rows.length == 0) {
      return {
        success: false,
        message: "No se encontraron peticiones",
      };
    } else {
      return {
        success: true,
        totalPetitions: count,
        currentPage: pageNum,
        totalPages: Math.ceil(count / limit),
        data: rows,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al recopilar peticiones",
      messageError: error.message
    };
  }
};

module.exports = getAllPetitions;
