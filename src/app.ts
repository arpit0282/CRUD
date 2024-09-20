import express, {Application} from "express";
import sequelize from "./config/database";
import userRoutes from "./routes/userRoutes";

// create express app
const app: Application = express();

// middleware
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// sync database
sequelize.sync().then(() => {
    console.log("Database & Table created");
});

export default app;
