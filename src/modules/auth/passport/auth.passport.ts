import { PassportStatic, use } from "passport";

import dotenv from 'dotenv';
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "../../users/users.service";

dotenv.config();
const usersService = new UsersService();

export function configuratePassport(passport: PassportStatic) {
    passport.use(new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET as string,
    },
        async (jwtPayload, done) => {
            try {
                const user = await usersService.findUserOneByEmail(jwtPayload.email);
                if (user) {
                    return done(null, {
                        usernama: user.username,
                        email: user.email,
                        roles: user.roles.map((role) => role.name)
                    });
                }
                return done(null, false);
            } catch (err) {
                return done(err, false);
            }
        }
    ));
}