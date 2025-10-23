const roleValidate = (...allowedRoles) => {
    return (req, res, next) => {
        if(!req.user) return res.status(401).json({ message: "Usuario no autenticado" });

        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({ succes: false, message: "No tienes permisos para acceder a esta ruta" })
        }

        next();
    }
}

module.exports = roleValidate;