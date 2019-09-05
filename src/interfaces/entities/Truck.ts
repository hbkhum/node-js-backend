import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Vehicle } from "./interfaces/IVehicle";

@Entity('Trucks')
export class Truck extends Vehicle {
    @PrimaryGeneratedColumn('uuid')
    public TruckId!: string;
}
