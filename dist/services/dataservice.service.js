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
const car_service_1 = require("./car.service");
const truck_service_1 = require("./truck.service");
const typescript_ioc_1 = require("typescript-ioc");
let DataService = class DataService {
    //carService: CarService;  
    //truckService: TruckService;
    constructor(carService, truckService) {
        this.carService = carService;
        this.truckService = truckService;
        //this.carService=_carService;
        //this.truckService=_truckService;
    }
};
DataService = __decorate([
    __param(0, typescript_ioc_1.Inject),
    __param(1, typescript_ioc_1.Inject),
    __metadata("design:paramtypes", [car_service_1.CarService,
        truck_service_1.TruckService])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=dataservice.service.js.map