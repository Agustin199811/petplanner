import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PetStatus, PetType } from "../enum/pets.enum";
import { User } from "../../users/entity/users.entity";

@Entity()
export class Pet {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column({
        type: 'enum',
        enum: PetType,
    })
    type!: PetType

    @Column({ type: 'varchar', length: 7, default: '#FFB6C1' })
    color!: string;

    @Column({
        type: 'enum',
        enum: PetStatus,
        default: PetStatus.HAPPY,
    })
    currentStatus!: PetStatus;

    @Column({ type: 'int', default: 100, comment: 'Health level 0-100' })
    health!: number;

    @Column({ type: 'int', default: 100, comment: 'Happiness level 0-100' })
    happiness!: number;


    @Column()
    level!: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    lastInteraction!: Date;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    @DeleteDateColumn()
    deletedAt!: Date;

    @Column({ type: 'uuid' })
    userId!: string;

    @OneToOne(() => User, user => user.pet)
    @JoinColumn({ name: 'userId' })
    user!: User;

}