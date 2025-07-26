import { IsBoolean, IsOptional } from 'class-validator';

export class CompleteActivityDto {
    @IsOptional()
    @IsBoolean()
    wasOnTime?: boolean = true;
}