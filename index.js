const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index.js");
const resourceRoutes = require("./routes/resourceRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/resources", resourceRoutes);

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch((error) => console.error("Error in creating database.", error));

app.listen(4000, () => console.log("Server running on port 4000"));
