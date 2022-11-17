import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import * as path from 'path';

export default class BaseController extends AbstractController{

    private static instance : BaseController;

    public  static getInstance():BaseController{
        if (this.instance) return this.instance;

        this.instance = new BaseController("base");
        return this.instance;
    }
    protected initRouters(): void{
        this.router.get(`/crearRegistro`, this.crearRegistro.bind(this));
    }

    private crearRegistro(req:Request, res:Response){
        try{
            console.log("Formulario desplegado");
            res.status(200).sendFile(path.join(__dirname, '..', 'views', 'form1.html'));
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error");
        }
    }

}