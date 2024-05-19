import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
  } catch (error) {
    console.log(error);
  }

  app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}`);
  });
}

main();
