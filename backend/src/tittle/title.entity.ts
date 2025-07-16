import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('db_content')
export class DBcontent {
    @PrimaryGeneratedColumn()
    num: number;

    @Column()
    content: string;
}