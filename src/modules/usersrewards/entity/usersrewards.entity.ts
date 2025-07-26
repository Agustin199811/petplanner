import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/users.entity";
import { Reward } from "../../rewards/entity/rewards.entity";

@Entity()
export class UserReward {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'timestamp', nullable: true })
    exchangeDate!: Date;

    @Column({ type: 'boolean', default: false })
    isUsed!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    @Column({ type: 'uuid' })
    userId!: string;

    @Column({ type: 'uuid' })
    rewardId!: string;

    @ManyToOne(() => User, user => user.userRewards)
    @JoinColumn({ name: 'userId' })
    user!: User;

    @ManyToOne(() => Reward, reward => reward.userRewards)
    @JoinColumn({ name: 'rewardId' })
    reward!: Reward;

}