import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entity/users.entity";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    title!: string;

    @Column("text")
    description!: string;

    @Column()
    category!: string;

    @Column({ type: "date" })
    scheduleDate!: Date;

    @Column({ type: "time" })
    scheduleTime!: string;

    @Column({ default: false })
    isCompleted!: boolean;

    @Column({ type: "datetime", nullable: true })
    completedDate!: Date;

    @Column({ default: false })
    activeRemainder!: boolean;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    @ManyToOne(() => User, user => user.activities)
    user!: User;

}