import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import Token from "./token.entity"
import Task from "./Task"

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @OneToMany(() => Token, token => token.user)
    tokens?: Token[]
    tasks!: Task[]
}