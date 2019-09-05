"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typeorm_1 = require("typeorm");
const car_controller_1 = require("./controllers/car.controller");
const truck_controller_1 = require("./controllers/truck.controller");
class App {
    //private o:Connection=null ;
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.routes();
        //this.middlewares();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3001);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Server on port 3000');
            typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
            })).catch(error => console.log(error));
        });
    }
    routes() {
        //this.app.use(IndexRoutes);
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        routing_controllers_1.useExpressServer(this.app, {
            // register created express server in routing-controllers
            controllers: [
                car_controller_1.CarController,
                truck_controller_1.TruckController
            ] // and configure it the way you need (controllers, validation, etc.)
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map