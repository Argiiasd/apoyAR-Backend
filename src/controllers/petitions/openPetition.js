const { petition } = require("../../db");

const openPetition = async (id) => {
    try {
        const foundPetition = await petition.findByPk(id);
        
        if(!foundPetition){
            return {
                success: false,
                message: "No se encontró la petición"
            }
        } else if(foundPetition.isActive === true){
            return {
                success: false,
                message: "La petición ya se encuentra activa"
            }
        } else {
            foundPetition.isActive = true;
            foundPetition.save();
            return {
                success: true,
                message: "Petición activada con éxito"
            }
        }
    } catch(error){
        return{
            success: false,
            message: "Error al intentar activar la petición"
        }
    }
}

module.exports = openPetition;