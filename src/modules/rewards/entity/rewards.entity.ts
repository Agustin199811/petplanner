import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RewardType } from "../enum/rewards.enum";
import { UserReward } from "../../usersrewards/entity/usersrewards.entity";

@Entity()
export class Reward {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column({ type: 'text', nullable: true })
    description!: string;

    @Column({
        type: 'enum',
        enum: RewardType
    })
    typeOfReward!: RewardType;

    @Column()
    necessaryPoints!: number;

    @Column({ type: 'varchar', nullable: true })
    icon!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    @OneToMany(() => UserReward, userReward => userReward.reward)
    userRewards!: UserReward[];
}