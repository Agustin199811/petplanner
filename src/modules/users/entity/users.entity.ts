import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Pet } from "../../pets/entity/pets.entity";
import { Activity } from "../../activities/entity/activities.entity";
import { StreakHistory } from "../../streakhistories/entity/streakhistories.entity";

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

    @Column({ type: 'datetime' })
    registerDate!: Date;

    @Column({ type: "int", default: 0 })
    currentStreak!: number;

    @Column({ type: "int", default: 0 })
    points!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    @OneToOne(() => Pet)
    @JoinColumn()
    pet!: Pet;

    @OneToMany(() => Activity, activity => activity.user)
    activities!: Activity[];

    @OneToMany(() => StreakHistory, streakHistory => streakHistory.user)
    streakHistory!: StreakHistory[];
}