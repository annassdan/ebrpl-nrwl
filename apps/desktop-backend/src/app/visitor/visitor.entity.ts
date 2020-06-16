import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'visitor'})
export class VisitorEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  lastModifiedAt: Date;

  @Column({ length: 255 })
  nama: string;

  @Column()
  umur: number;

  @Column({ type: 'text'})
  alamat: string;


}
