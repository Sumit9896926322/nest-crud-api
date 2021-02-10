import catEntity from 'src/cat/cat.entity';
import {BaseEntity,Entity,Column,PrimaryGeneratedColumn, Unique, OneToMany} from 'typeorm';


@Entity()
@Unique(["username"])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column()
    password:string

    @OneToMany(type=>catEntity,cats=>cats.user,{eager:false})
    cats:catEntity[]
}