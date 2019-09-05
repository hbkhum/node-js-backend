import { Vehicle } from "./interfaces/IVehicle";
import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Cars')
export class Car extends Vehicle {

    @PrimaryGeneratedColumn('uuid')
    public CarId!: string;

}


