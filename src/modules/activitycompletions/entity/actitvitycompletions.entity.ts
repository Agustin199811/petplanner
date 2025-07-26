import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Activity } from "../../activities/entity/activities.entity";
import { User } from "../../users/entity/users.entity";

@Entity()
export class ActivityCompletion {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    completedAt!: Date;

    @Column({ type: 'int', default: 0 })
    pointsEarned!: number;

    @Column({ type: 'boolean', default: true })
    wasOnTime!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @Column({ type: 'uuid' })
    activityId!: string;

    @Column({ type: 'uuid' })
    userId!: string;

    // Relaciones
    @ManyToOne(() => Activity, activity => activity.completions)
    @JoinColumn({ name: 'activityId' })
    activity!: Activity;

    @ManyToOne(() => User, user => user.activityCompletions)
    @JoinColumn({ name: 'userId' })
    user!: User;
}