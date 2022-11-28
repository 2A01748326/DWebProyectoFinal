import { Request, response, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";
import path from 'path';

class ModeloController extends AbstractController{

    private static instance : ModeloController;

    public  static getInstance():ModeloController{
        if (this.instance) return this.instance;

        this.instance = new ModeloController("modelo");
        return this.instance;
    }
    protected initRouters(): void{
        this.router.get(`/prediccion`, this.getPredecir.bind(this));
    }

    private async getPredecir(req:Request, res:Response){
        try{
            //console.log(req.body);
            //await res.redirect('http://localhost:8081/modelo');
            //res.sendFile(path.join(__dirname, '.', 'form1.html'));
            console.log("Se logro")
            //res.status(200).send("Registro exitoso");
            res.status(200).sendFile(path.join(__dirname, '..', 'form1.html'));
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error");
        }
    }

}
export default  ModeloController;