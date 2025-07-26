import { Role } from "../../roles/entity/roles.entity";

export class CreateUserDto {
    username!: string;
    email!: string;
    password!: string;
    createdAt!: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    roles!: Role[];
}