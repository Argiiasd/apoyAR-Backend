const s3 = require("../services/r2");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const uploadToR2 = async (file, folder = "petitions") => {
  const key = `${folder}/${uuidv4()}-${file.originalname}`;

  const params = {
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  await s3.putObject(params).promise();

  return `${process.env.R2_PUBLIC_URL}/${key}`;
};

module.exports = uploadToR2;
