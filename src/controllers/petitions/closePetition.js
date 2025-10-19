const { petition } = require("../../db");

const closePetition = async (id) => {
    try {
        const foundPetition = await petition.findByPk(id);
        
        if(!foundPetition){
            return {
                success: false,
                message: "No se encontró la petición"
            }
        } else if(foundPetition.isActive === false){
            return {
                success: false,
                message: "La petición ya se encuentra inactiva"
            }
        } else {
            foundPetition.isActive = false;
            foundPetition.save();
            return {
                success: true,
                message: "Petición desactivada con éxito"
            }
        }
    } catch(error){
        return{
            success: false,
            message: "Error al intentar desactivar la petición"
        }
    }
}

module.exports = closePetition;