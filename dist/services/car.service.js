"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Car_1 = require("../interfaces/entities/Car");
const typescript_ioc_1 = require("typescript-ioc");
let CarService = class CarService {
    createCar(car) {
        return typeorm_1.getManager().getRepository(Car_1.Car).save(car);
    }
    getAllCars() {
        return typeorm_1.getManager().getRepository(Car_1.Car).find();
    }
    updateCar(id, element) {
        return typeorm_1.getManager().getRepository(Car_1.Car).update({ CarId: id }, element);
    }
    deleteCar(id) {
        return typeorm_1.getManager().getRepository(Car_1.Car).delete({ CarId: id });
    }
    getById(id) {
        return typeorm_1.getManager().getRepository(Car_1.Car).findOne({
            where: {
                CarId: id
            }
        });
    }
};
CarService = __decorate([
    typescript_ioc_1.Singleton
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map