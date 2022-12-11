import { Optional } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ unique: true })
  email: string;
  @Column()
  hash: string;
  @Column()
  @Optional()
  firstName: string;
  @Column()
  @Optional()
  lastName: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
