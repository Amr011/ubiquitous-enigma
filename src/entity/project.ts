import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   BaseEntity,
   CreateDateColumn,
   JoinTable,
   ManyToMany,
   OneToMany,
   UpdateDateColumn,
} from 'typeorm'

@Entity()
export class project extends BaseEntity {
   @PrimaryGeneratedColumn()
   id: number

   @Column({ type: 'varchar', length: 256, nullable: false })
   name: string

   @Column({ type: 'varchar', length: 256, nullable: false })
   key: string

   @Column({ type: 'varchar', length: 256, nullable: false })
   icon: string

   @CreateDateColumn({ type: 'timestamp' })
   createdAt: Date

   @UpdateDateColumn({ type: 'timestamp' })
   updatedAt: Date
}
