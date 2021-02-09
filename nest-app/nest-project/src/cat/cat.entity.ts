import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class catEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}