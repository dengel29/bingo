import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { City } from './City';
import { Objective } from './Objective';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  // TODO: add has many relationship for cities
  @ManyToOne(() => City, (city) => city.districts)
  city: City;

  @OneToMany(() => Objective, (objective) => objective.creator)
  objectivesCreated: Objective[];
}
