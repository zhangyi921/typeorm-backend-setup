import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        length: 100
    })
    firstName: string;

    @Column({
        length: 100
    })
    lastName: string;

    @Column()
    age: number;

    @Column()
    hasCanadianCitizenShip: boolean

    @Column({
        length: 100
    })
    email: string

}
