import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Country } from './Country';
import { District } from './District';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // TODO: add has many relationship for cities
  @ManyToOne(() => Country, (country) => country.cities)
  country: Country;

  @OneToMany(() => District, (district) => district.city)
  districts: District[];
}
