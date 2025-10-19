const activateUserController = require("../../controllers/users/activateUser");

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await activateUserController(id);
        res.status(200).json(data);
    } catch(error){
        res.status(500).json({
            success: false,
            message: "Error al recibir el id del usuario"
        })
    }
}