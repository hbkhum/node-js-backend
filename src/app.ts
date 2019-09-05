import express,{Application} from 'express';
import bodyParser from "body-parser";
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import {createConnection} from "typeorm";
import { CarController } from './controllers/car.controller';
import { TruckController } from './controllers/truck.controller';




export class App {
    
    private app:Application;
    //private o:Connection=null ;
    constructor(private port?:number|string ){
        this.app=express();
        this.settings();
        this.routes();
        //this.middlewares();
    }
    settings(){
        this.app.set('port',this.port || process.env.PORT ||3000 )
    }


    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port 3000');
        
        createConnection().then(async connection => {
        }).catch(error => console.log(error));  

    }





    routes(){
        //this.app.use(IndexRoutes);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        useExpressServer(this.app, {
            // register created express server in routing-controllers
            controllers: [
                CarController,
                TruckController
            ] // and configure it the way you need (controllers, validation, etc.)
          });
    }


}
