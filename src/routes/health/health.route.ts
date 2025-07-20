import { Request, Response, Router } from "express";

const healthRoutes = Router();

healthRoutes.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "Healthy" });
});

export default healthRoutes;