const postUserController = require("../../controllers/users/postUser");
const s3 = require("../../services/r2");
require("dotenv").config();

module.exports = async (req, res) => {
  try {
    let { username, email, password, role } = req.body;
    if (!role) role = "user";

    let profilePicture = null;

    if (req.file) {
      const file = req.file;
      const fileKey = `profile-pics/${Date.now()}-${file.originalname}`;

      await s3
        .putObject({
          Bucket: process.env.R2_BUCKET_NAME,
          Key: fileKey,
          Body: file.buffer,
          ContentType: file.mimetype,
        })
        .promise();

      profilePicture = `${process.env.R2_PUBLIC_URL}/${fileKey}`;
    }

    const data = await postUserController(
      username,
      email,
      password,
      role,
      profilePicture
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al recibir los datos para crear usuario",
    });
  }
};
