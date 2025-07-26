import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserAchievement } from "../../userachievement/entity/userachievements.entity";


@Entity()
export class Achievement {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column({ type: 'text' })
    description!: string;

    @Column({ type: 'varchar', nullable: true })
    icon!: string;

    @Column({ type: 'int', default: 0 })
    pointsReward!: number;

    @Column({ type: 'int', default: 1, comment: 'Target value to unlock achievement' })
    targetValue!: number;

    @Column({ type: 'varchar', default: 'tasks_completed', comment: 'Type: tasks_completed, streak, points_earned' })
    achievementType!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    // Relaciones
    @OneToMany(() => UserAchievement, userAchievement => userAchievement.achievement)
    userAchievements!: UserAchievement[];
}