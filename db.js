const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const db_url = process.env.DB_URL;
    //   console.log("bd string", db_url);
    const options = {
      useNewUrlParser: true,
    };
    const connection = await mongoose
      .connect(db_url)
      .then(() => {
        console.log("database connected succesfully");
      })
      .catch((err) => console.log("error occured", err));
  } catch (error) {}
};

module.exports = connectDB;
