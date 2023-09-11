import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { District } from './District';
import { User } from './User';

@Entity()
export class Objective {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  countable: boolean;

  @Column({ nullable: true })
  countGoal: number;

  @ManyToOne(() => User, (creator) => creator.objectivesCreated)
  creator: User;

  // TODO: add has many relationship for cities
  @ManyToOne(() => District, (district) => district.objectives)
  district: District;
}
