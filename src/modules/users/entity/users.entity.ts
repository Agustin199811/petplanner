// src/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { Activity } from '../../activities/entity/activities.entity';
import { Pet } from '../../pets/entity/pets.entity';
import { UserReward } from '../../usersrewards/entity/usersrewards.entity';
import { StreakHistory } from '../../streakhistories/entity/streakhistories.entity';
import { UserAchievement } from '../../userachievement/entity/userachievements.entity';
import { ActivityCompletion } from '../../activitycompletions/entity/actitvitycompletions.entity';
import { Role } from '../../roles/entity/roles.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    username!: string;

    @Column({ type: 'int', default: 0 })
    currentStreak!: number;

    @Column({ type: 'int', default: 0 })
    points!: number;

    @Column({ type: 'int', default: 1 })
    level!: number;

    @Column({ type: 'timestamp', nullable: true })
    lastActiveDate!: Date;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    // Relaciones
    @OneToMany(() => Activity, activity => activity.user)
    activities!: Activity[];

    @OneToOne(() => Pet, pet => pet.user)
    pet!: Pet;

    @OneToMany(() => UserReward, userReward => userReward.user)
    userRewards!: UserReward[];

    @OneToMany(() => StreakHistory, streakHistory => streakHistory.user)
    streakHistories!: StreakHistory[];

    @OneToMany(() => ActivityCompletion, completion => completion.user)
    activityCompletions!: ActivityCompletion[];

    @OneToMany(() => UserAchievement, userAchievement => userAchievement.user)
    userAchievements!: UserAchievement[];

    @ManyToMany(() => Role, (role) => role.users)
    @JoinTable()
    roles!: Role[];
}