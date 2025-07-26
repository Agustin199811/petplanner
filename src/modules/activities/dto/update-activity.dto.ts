import { IsString, IsEnum, IsOptional, IsBoolean, IsInt, IsDateString, MinLength, MaxLength, Min } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ActivityCategory, Priority } from '../enum/actitivities.enum';


export class UpdateActivityDto {
    @IsOptional()
    @IsString()
    @MinLength(1, { message: 'Title is required' })
    @MaxLength(100, { message: 'Title must not exceed 100 characters' })
    @Transform(({ value }) => value?.trim())
    title?: string;

    @IsOptional()
    @IsString()
    @MaxLength(500, { message: 'Description must not exceed 500 characters' })
    @Transform(({ value }) => value?.trim())
    description?: string;

    @IsOptional()
    @IsEnum(ActivityCategory, { message: 'Invalid category' })
    category?: ActivityCategory;

    @IsOptional()
    @IsEnum(Priority, { message: 'Invalid priority' })
    priority?: Priority;

    @IsOptional()
    @IsDateString({}, { message: 'Invalid schedule date format' })
    scheduleDate?: string;

    @IsOptional()
    @IsDateString({}, { message: 'Invalid schedule time format' })
    scheduleTime?: string;

    @IsOptional()
    @IsBoolean()
    activeReminder?: boolean;

    @IsOptional()
    @IsInt({ message: 'Points reward must be an integer' })
    @Min(1, { message: 'Points reward must be at least 1' })
    @Type(() => Number)
    pointsReward?: number;
}