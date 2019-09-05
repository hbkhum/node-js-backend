
import {  Container } from "typescript-ioc";
import { JsonController, OnUndefined, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { DataService } from "../services/dataservice.service";
import { Truck } from "../interfaces/entities/Truck";

@JsonController()
export class TruckController {

    dataService:DataService
    constructor() {
        this.dataService = Container.get(DataService); 
    }

    @Get("/api/truck")
    getAll() {
        return this.dataService.truckService.getAllTrucks().then((data) => {return data;});
    }

    @Get("/api/truck/:id")
    @OnUndefined(404)
    getOne(@Param("id") id: string) {
        return this.dataService.truckService.getById(id).then((data) => {return data;});
    }

    @Post("/api/truck")
    post(@Body() truck: Truck) {
      return this.dataService.truckService.createTruck(truck).then((data) => {
            if (data.TruckId!=""){
                return data.TruckId; 
            }
            
        });
    }

    @Put("/api/truck/:id")
    put(@Param("id") id: string, @Body() truck: Truck) {
        return this.dataService.truckService.updateTruck(id,truck).then((data) => {
            return true;
            
        });
    }

    @Delete("/api/truck/:id")
    remove(@Param("id") id: string) {
      return this.dataService.truckService.deleteTruck(id).then((data) => {
        return true;
        
    });
    }
  
}