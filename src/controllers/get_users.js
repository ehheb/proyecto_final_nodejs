import {Users} from "../models/";

//Función para obtener a todos los usuarios
export const findAllUsers = async (req, res) => {
    
    try{
        const allUsers = await Users.findAll();
        return res.status(200).json({
            allUsers
        });

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener a los usuarios"
        });
    }
};

//Función para encontrar a un usuario por medio del id que debe de estar en la URL
export const findOneUser = async(req, res) => {
    let  id = req.params.id;

    try {
        const findUser = await Users.findOne({where : {id: id}});

        if(findUser) {
            return res.status(200).json({
                message: "Usuario encontrado",
                findUser
            });

        } else {
            return res.status(400).json({
                message: "id no valido"
            });
        }

    } catch(error) {
        return res.status(500).json({
            message: "Error al obtener al usuario",
            error
        });
    }
}