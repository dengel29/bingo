import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { City } from './City';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // TODO: add has many relationship for cities
  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
