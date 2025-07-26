import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entity/users.entity";
import { Achievement } from "../../achievement/entity/achievements.entity";

@Entity()
export class UserAchievement {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'timestamp', nullable: true })
    unlockedAt!: Date;

    @Column({ type: 'int', default: 0 })
    progress!: number;

    @Column({ type: 'boolean', default: false })
    isCompleted!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @Column({ type: 'uuid' })
    userId!: string;

    @Column({ type: 'uuid' })
    achievementId!: string;

    // Relaciones
    @ManyToOne(() => User, user => user.userAchievements)
    @JoinColumn({ name: 'userId' })
    user!: User;

    @ManyToOne(() => Achievement, achievement => achievement.userAchievements)
    @JoinColumn({ name: 'achievementId' })
    achievement!: Achievement;
}