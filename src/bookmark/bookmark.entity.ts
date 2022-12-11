import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bookmark')
export class Bookmark {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  link: string;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
