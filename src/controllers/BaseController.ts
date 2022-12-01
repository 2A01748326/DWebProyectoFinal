import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class BaseController extends AbstractController{

    private static instance : BaseController;

    public  static getInstance():BaseController{
        if (this.instance) return this.instance;

        this.instance = new BaseController("base");
        return this.instance;
    }
    protected initRouters(): void{
        this.router.post(`/crearRegistro`, this.postCrearRegistro.bind(this));
        this.router.get(`/consultarRegistros`, this.getConsultarRegistros.bind(this));
        this.router.post(`/consultarRegistro`, this.getConsultarRegistro.bind(this));
        this.router.post(`/eliminarRegistro`, this.postEliminarRegistro.bind(this));
    }

    private async postCrearRegistro(req:Request, res:Response){
        try{
            console.log(req.body);
            await db.Registro.create(req.body);
            console.log("Registro exitoso")
            res.status(200).send("Registro exitoso");
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error");
        }
    }

    private async getConsultarRegistros(req:Request, res:Response){
        try{
            console.log(req.body);
            const registros = await db.Registro.findAll(req.body);
            console.log("Registros encontrados")
            res.status(200).send(registros);
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error");
        }
    }

    private async getConsultarRegistro(req:Request, res:Response){
        try{
            console.log(req.body);
            const registro = await db.Registro.findOne({
                where: {
                    id: req.body.id
                }});
            console.log("Registro encontrado")
            res.status(200).send(registro);
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error");
        }
    }

    private async postEliminarRegistro(req:Request, res:Response){
        try{
            console.log(req.body);
            await db.Registro.destroy({
                where: {
                    id: req.body.id
                }});
            console.log("Registro eliminado")
            res.status(200).send("Registro eliminado correctamente");
        }catch(err:any){
            console.log(err);
            res.status(500).send("Error");
        }
    }

}
export default  BaseController;