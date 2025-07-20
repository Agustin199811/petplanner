import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/users.entity";
import { Reward } from "../../rewards/entity/rewards.entity";

@Entity()
export class UserReward {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: "datetime" })
    exchangeDate!: Date;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    @ManyToOne(() => User)
    user!: User;

    @ManyToOne(() => Reward)
    reward!: Reward;

}