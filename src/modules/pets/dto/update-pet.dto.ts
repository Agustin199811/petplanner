import { IsString, IsEnum, IsOptional, MinLength, MaxLength, Matches } from 'class-validator';
import { Transform } from 'class-transformer';
import { PetType } from '../enum/pets.enum';


export class UpdatePetDto {
    @IsOptional()
    @IsString()
    @MinLength(1, { message: 'Pet name is required' })
    @MaxLength(20, { message: 'Pet name must not exceed 20 characters' })
    @Transform(({ value }) => value?.trim())
    name?: string;

    @IsOptional()
    @IsEnum(PetType, { message: 'Invalid pet type' })
    type?: PetType;

    @IsOptional()
    @IsString()
    @Matches(/^#[0-9A-Fa-f]{6}$/, { message: 'Color must be a valid hex color code' })
    color?: string;
}
