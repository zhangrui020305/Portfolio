import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('db_contact')
export class DBContact {
    @PrimaryGeneratedColumn()
    num: number;

    @Column()
    address: string;

    @Column()
    phoneNo: string;

    @Column()
    email: string;
}