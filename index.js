require("dotenv").config();
const server = require("./src/app");
const port = process.env.PORT;
const { conn } = require("./src/db");

conn
  .sync({ force: false })
  .then(() => {
    console.log("Database synced correctly");
  })
  .then(() => {
    server.listen(port, () => {
      console.log(`Server listening at port ${port}`);
    });
  });