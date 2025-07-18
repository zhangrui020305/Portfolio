import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('db_experiences')
export class DBExperience {
    @PrimaryGeneratedColumn()
    num: number;

    @Column()
    year: string;

    @Column()
    role: string;

    @Column()
    company: string;

    @Column()
    description: string;

    @Column()
    technologies: string;
}