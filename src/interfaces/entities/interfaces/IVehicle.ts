import { Column } from "typeorm";


export interface IVehicle{
    Model:string;
    Make:string;
    VIN:string;
    Color:string;
    Year:number;
}

export abstract class Vehicle implements IVehicle{
    @Column()
    public Model!: string;

    @Column()
    public Make!: string;

    @Column()
    public VIN!: string;

    @Column()
    public Color!: string;

    @Column()
    public Year!: number;


}