import { NextFunction, Response } from "express";
import { AuthRequest } from "../interface/auth.interface";

export function authorizedRoles(...allowedRole: string[]) {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if (!req.user || !Array.isArray(req.user.roles)) {
            return res.status(403).json({ message: "Access denied" });
        }

        const userRoles = new Set(req.user.roles);
        const hasRole = allowedRole.some((role) => userRoles.has(role));
        if (!hasRole) {
            return res.status(403).json({ message: 'Insufficent permission' });
        }

        next();
    };
}