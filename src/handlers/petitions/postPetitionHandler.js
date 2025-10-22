const postPetitionController = require("../../controllers/petitions/postPetition");
const uploadToR2 = require("../../utils/uploadToR2");

module.exports = async (req, res) => {
  try {
    const { title, description, infoTransf, categories } = req.body;
    const userId = req.user.id;
    const files = req.files;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Usuario no autenticado" });
    }

    if (!title?.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "El título es obligatorio" });
    }

    if (!description?.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "La descripción es obligatoria" });
    }

    if (!infoTransf?.trim()) {
      return res.status(400).json({
        success: false,
        message: "La información de transferencia es obligatoria",
      });
    }

    if (!Array.isArray(categories) || categories.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Debe incluir al menos una categoría",
      });
    }

    if (files.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Debe incluir al menos una imagen" });
    }

    if (files.length > 3) {
      return res
        .status(400)
        .json({ success: false, message: "Solo se permiten hasta 3 imágenes" });
    }

    const uploadedImages = [];
    for (const file of files) {
      const imageUrl = await uploadToR2(file, "petitions");
      uploadedImages.push({ url: imageUrl, type: "image" });
    }

    const data = await postPetitionController(
      title,
      description,
      infoTransf,
      categories,
      userId,
      uploadedImages
    );

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error al recibir los datos para crear la petición",
      messageError: error.message,
    });
  }
};
