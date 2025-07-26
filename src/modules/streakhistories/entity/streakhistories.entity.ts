import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/users.entity";


@Entity()
export class StreakHistory {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: "date" })
    date!: string;

    @Column({ type: 'boolean', default: true })
    streakContinue!: boolean;

    @Column({ type: 'int', default: 0 })
    completedActivities!: number;

    @Column({ type: 'int', default: 0 })
    pointsObtained!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    @Column({ type: 'uuid' })
    userId!: string;

    @ManyToOne(() => User, user => user.streakHistories)
    @JoinColumn({ name: 'userId' })
    user!: User;
}