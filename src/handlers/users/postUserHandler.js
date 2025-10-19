const postUserController = require("../../controllers/users/postUser");

module.exports = async (req, res) => {
  try {
    let { username, email, password, role } = req.body;
    if (!role) role = "user";
    const data = await postUserController(username, email, password, role);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al recibir los datos para crear usuario",
    });
  }
};
