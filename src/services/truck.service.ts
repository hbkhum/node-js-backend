import { getManager, UpdateResult, DeleteResult } from "typeorm";
import { Truck } from '../interfaces/entities/Truck';
import { Singleton, AutoWired } from "typescript-ioc";

@Singleton 
export class TruckService {
    createTruck(truck: Truck): Promise<Truck> {
        return getManager().getRepository(Truck).save(truck);
    }
    getAllTrucks(): Promise<Truck[]> {
        return getManager().getRepository(Truck).find();
    }
    updateTruck(id: string, element: Truck): Promise<UpdateResult> {
        return getManager().getRepository(Truck).update({ TruckId: id }, element);
    }
    deleteTruck(id: string): Promise<DeleteResult> {
        return getManager().getRepository(Truck).delete({ TruckId: id });
    }
    getById(id: string) {
        return getManager().getRepository(Truck).findOne({
            where: {
                TruckId: id
            }
        });
    }
}