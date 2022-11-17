//const express = require('express')//NodeJS
import express, { Response } from 'express'
import AbstractController from '../controllers/AbstractController';

class Server{
    //Atributos de la clase
    private app: express.Application;
    private port: number;
    private env:string;

    //Metodo constructor
    constructor(appInit:{port:number;env:string;middlewares:any[];controllers:AbstractController[]}){
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadMiddleware(appInit.middlewares);
        this.routes(appInit.controllers);
    }

    //Cargar los middlewares
    private loadMiddleware(middlewares:any[]):void{
        middlewares.forEach((middleware:any)=>{
            this.app.use(middleware);
        });
    }

    private routes(controllers:AbstractController[]):void{
        // Ruta auxiliar para verificar el funcionamiento de la app
        this.app.get('/', (_:any,res:Response)=>{
            res.status(200).send({
                message: "The backend modulo is working",
                documentation: 'http://github.com'
            });
        });
        controllers.forEach((controller:AbstractController)=>{
            this.app.use(`/${controller.prefix}`, controller.router);
        })
    }

    public async init(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: Running @'http://localhost:${this.port}'`);
        });
    }
}

export default Server;