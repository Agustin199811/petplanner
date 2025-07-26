import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/users.entity";
import { ActivityCategory, Priority } from "../enum/actitivities.enum";
import { ActivityCompletion } from "../../activitycompletions/entity/actitvitycompletions.entity";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    title!: string;

    @Column("text")
    description!: string;

    @Column({
        type: 'enum',
        enum: ActivityCategory,
    })
    category!: ActivityCategory;

    @Column({
        type: 'enum',
        enum: Priority,
    })
    priority!: Priority;

    @Column({ type: 'timestamp', nullable: true })
    scheduleDate!: Date;

    @Column({ type: 'timestamp', nullable: true })
    scheduleTime!: Date;

    @Column({ type: 'boolean', default: false })
    isCompleted!: boolean;

    @Column({ type: 'timestamp', nullable: true })
    completedDate!: Date;

    @Column({ type: 'boolean', default: false })
    activeReminder!: boolean;

    @Column({ type: 'int', default: 10 })
    pointsReward!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    @Column({ type: 'uuid' })
    userId!: string;

    @ManyToOne(() => User, user => user.activities)
    @JoinColumn({ name: 'userId' })
    user!: User;

    @OneToMany(() => ActivityCompletion, completion => completion.activity)
    completions!: ActivityCompletion[];

}