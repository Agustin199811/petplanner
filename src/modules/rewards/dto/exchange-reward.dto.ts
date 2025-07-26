import { IsUUID } from 'class-validator';

export class ExchangeRewardDto {
    @IsUUID(4, { message: 'Invalid reward ID' })
    rewardId!: string;
}