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
export class District {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // TODO: add has many relationship for cities
  @ManyToOne(() => City, (city) => city.districts)
  city: City;

  @OneToMany(() => Objective, (objective) => objective.district)
  objectives: Objective[];
}
