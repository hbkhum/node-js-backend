
import {getManager, UpdateResult, DeleteResult} from "typeorm";
import { Car } from '../interfaces/entities/Car';
import { Singleton, AutoWired } from "typescript-ioc";

@Singleton 
export class CarService{
    createCar(car:Car):Promise<Car>{
        return getManager().getRepository(Car).save(car);
        
    }

    getAllCars():Promise<Car[]>{        
        return getManager().getRepository(Car).find()
    }

    updateCar(id:string,element:Car):Promise<UpdateResult>{
        return getManager().getRepository(Car).update({CarId:id},element);
    }
    deleteCar(id:string):Promise<DeleteResult>{
        return getManager().getRepository(Car).delete({CarId:id});
    }
    getById(id:string){
        return getManager().getRepository(Car).findOne({
            where:{
                CarId:id
            }
        })
    }
}


