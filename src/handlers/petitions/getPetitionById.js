const getPetitionByIdController = require("../../controllers/petitions/getPetitionById");

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getPetitionByIdController(id)
        res.status(200).json(data);
    } catch(error){
        return {
            success: false,
            message: "Error al recibir la petición"
        }
    }
}