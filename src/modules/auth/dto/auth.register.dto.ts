import { Expose, Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterUserDto {

    @IsString()
    @IsNotEmpty({ message: 'Username is required' })
    @MinLength(3, { message: 'Username must be at least 3 characters long' })
    @MaxLength(20, { message: 'Username must not exceed 20 characters' })
    @Transform(({ value }) => value?.trim())
    username!: string;

    @Expose()
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @Expose()
    @Transform(({ value }) =>
        typeof value === 'string' ? value.trim() : value)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d_!@#$%^&*]+$/, {
        message: 'Password must contain both letters and numbers, and can include special characters like _!@#$%^&*',
    })
    @IsString()
    @IsNotEmpty()
    @Length(8, 12)
    password!: string;
}