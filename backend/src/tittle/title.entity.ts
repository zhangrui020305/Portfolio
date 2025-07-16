import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('db_content')
export class db_content {
    @PrimaryGeneratedColumn()
    num: number;

    @Column()
    content: string;
}