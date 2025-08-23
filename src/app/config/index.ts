import dotenv from "dotenv";
import path from "path";

// C:\\Users\\ahsan\\Documents\\Level-2-Projects\\vista-systech-ecommerce\\.env
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
