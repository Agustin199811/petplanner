import { Expose, Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @Expose()
    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value?.toLowerCase())
    email!: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    password!: string;
}