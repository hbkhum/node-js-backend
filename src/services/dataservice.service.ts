import { CarService } from "./car.service";
import { TruckService } from "./truck.service";
import { IDataService } from "./IdataService";
import {AutoWired, Inject, Singleton} from "typescript-ioc";





export class DataService implements IDataService {
    

    //carService: CarService;  
    
    //truckService: TruckService;

    constructor(
        @Inject public carService: CarService,
        @Inject public truckService: TruckService){
        //this.carService=_carService;
        //this.truckService=_truckService;
    }

    /*@Inject
    truckService: TruckService | undefined; ;*/
    
    

}