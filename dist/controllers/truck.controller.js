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
const Truck_1 = require("../interfaces/entities/Truck");
let TruckController = class TruckController {
    constructor() {
        this.dataService = typescript_ioc_1.Container.get(dataservice_service_1.DataService);
    }
    getAll() {
        return this.dataService.truckService.getAllTrucks().then((data) => { return data; });
    }
    getOne(id) {
        return this.dataService.truckService.getById(id).then((data) => { return data; });
    }
    post(truck) {
        return this.dataService.truckService.createTruck(truck).then((data) => {
            if (data.TruckId != "") {
                return data.TruckId;
            }
        });
    }
    put(id, truck) {
        return this.dataService.truckService.updateTruck(id, truck).then((data) => {
            return true;
        });
    }
    remove(id) {
        return this.dataService.truckService.deleteTruck(id).then((data) => {
            return true;
        });
    }
};
__decorate([
    routing_controllers_1.Get("/api/truck"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get("/api/truck/:id"),
    routing_controllers_1.OnUndefined(404),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "getOne", null);
__decorate([
    routing_controllers_1.Post("/api/truck"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Truck_1.Truck]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "post", null);
__decorate([
    routing_controllers_1.Put("/api/truck/:id"),
    __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Truck_1.Truck]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "put", null);
__decorate([
    routing_controllers_1.Delete("/api/truck/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "remove", null);
TruckController = __decorate([
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [])
], TruckController);
exports.TruckController = TruckController;
//# sourceMappingURL=truck.controller.js.map