import { Expose, Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRolesDto {
    @Expose()
    @Transform(({ value }) => typeof value === 'string' ?
        value.toLowerCase().trim() : value)
    @IsString()
    @IsNotEmpty()
    name!: string;
}