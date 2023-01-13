import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class Animal{
    @PrimaryGeneratedColumn()
    id: number
    @Column({length:100})
    Nome: String
    @Column({length:100})
    raça: string
}