

import {  Container } from "typescript-ioc";
import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { DataService } from "../services/dataservice.service";
import { Car } from "../interfaces/entities/Car";

@JsonController()
export class CarController {

    dataService:DataService
    constructor() {
        this.dataService = Container.get(DataService); 
    }

    @Get("/api/car")
    getAll() {
        return this.dataService.carService.getAllCars().then((data) => {return data;});
    }

    @Get("/api/car/:id")
    @OnUndefined(404)
    getOne(@Param("id") id: string) {
        return this.dataService.carService.getById(id).then((data) => {return data;});
    }

    @Post("/api/car")
    post(@Body() car: Car) {
      return this.dataService.carService.createCar(car).then((data) => {
            if (data.CarId!=""){
                return data.CarId; 
            }
            
        });
    }

    @Put("/api/car/:id")
    put(@Param("id") id: string, @Body() car: Car) {
        return this.dataService.carService.updateCar(id,car).then((data) => {
            return true;
            
        });
    }

    @Delete("/api/car/:id")
    remove(@Param("id") id: string) {
      return this.dataService.carService.deleteCar(id).then((data) => {
        return true;
        
    });
    }
  
}

/*export async function getCars(req:Request, res:Response){
    //const conn =await connectionDb;
    //connectionDb.
    //conn.manager.save(photo).then(photo => {
    //    console.log("Photo has been saved. Photo id is", photo.id);
    //});
    
}*/