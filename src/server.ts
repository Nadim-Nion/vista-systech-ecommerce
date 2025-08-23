import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`E-commerce app listening on port ${config.port} 😊`);
    });
  } catch (err) {
    console.log("Failed to connect database 😥", err);
  }
}

main();
