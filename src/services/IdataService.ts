import { CarService } from "./car.service";
import { TruckService } from "./truck.service";
export interface IDataService {
    carService: CarService;
    truckService: TruckService;
}
