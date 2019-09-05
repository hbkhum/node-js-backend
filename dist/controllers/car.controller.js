"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_ioc_1 = require("typescript-ioc");
const routing_controllers_1 = require("routing-controllers");
const dataservice_service_1 = require("../services/dataservice.service");
const Car_1 = require("../interfaces/entities/Car");
let CarController = class CarController {
    constructor() {
        this.dataService = typescript_ioc_1.Container.get(dataservice_service_1.DataService);
    }
    getAll() {
        return this.dataService.carService.getAllCars().then((data) => { return data; });
    }
    getOne(id) {
        return this.dataService.carService.getById(id).then((data) => { return data; });
    }
    post(car) {
        return this.dataService.carService.createCar(car).then((data) => {
            if (data.CarId != "") {
                return data.CarId;
            }
        });
    }
    put(id, car) {
        return this.dataService.carService.updateCar(id, car).then((data) => {
            return true;
        });
    }
    remove(id) {
        return this.dataService.carService.deleteCar(id).then((data) => {
            return true;
        });
    }
};
__decorate([
    routing_controllers_1.Get("/api/car"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get("/api/car/:id"),
    routing_controllers_1.OnUndefined(404),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "getOne", null);
__decorate([
    routing_controllers_1.Post("/api/car"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Car_1.Car]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "post", null);
__decorate([
    routing_controllers_1.Put("/api/car/:id"),
    __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Car_1.Car]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "put", null);
__decorate([
    routing_controllers_1.Delete("/api/car/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "remove", null);
CarController = __decorate([
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [])
], CarController);
exports.CarController = CarController;
/*export async function getCars(req:Request, res:Response){
    //const conn =await connectionDb;
    //connectionDb.
    //conn.manager.save(photo).then(photo => {
    //    console.log("Photo has been saved. Photo id is", photo.id);
    //});
    
}*/ 
//# sourceMappingURL=car.controller.js.map