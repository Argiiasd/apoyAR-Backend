const jwt = require("jsonwebtoken");

const tokenValidate = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token || token === "") {
    return res
      .status(401)
      .json({
        success: false,
        message: "No se encontró el token. Autorización denegada",
      });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Token inválido. Autorización denegada" });
  }
};

module.exports = tokenValidate;