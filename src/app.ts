import express from "express";
import cors from "cors";
import { loggerMiddleware } from "./common/middleware/logger.middleware";
import { TypeOrmConfig } from "./common/config/database.config";
import healthRoutes from "./routes/health/health.route";


const app = express();
const project: string = "/api/v1";
// app.use(
//     cors({
//         origin: `http://localhost:${process.env.PORT_REACT}`,
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type", "Authorization"],
//     })
// );


app.use(express.json());
app.use(loggerMiddleware);

app.use(project, healthRoutes);

TypeOrmConfig.initialize()
    .then(async () => {
        console.log('Database initialized');
    })
    .catch(async (err) => {
        console.error(err);
        process.exit(1);
    });

export default app;
