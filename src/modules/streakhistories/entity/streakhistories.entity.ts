import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/users.entity";


@Entity()
export class StreakHistory {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: "date" })
    date!: string;

    @Column()
    streakContinue!: boolean;

    @Column()
    completedActivities!: number;

    @Column()
    pointsObtained!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    @ManyToOne(() => User, user => user.streakHistory)
    user!: User;
}