//Combinacion de los archivos de la carpeta routes y controllers
//de un proyecto en nodejs

import { Router } from "express";

export default abstract class AbstractController{
    private _router:Router = Router();
    private _prefix:string;

    public get prefix():string{
        return this._prefix;
    }
    
    public get router():Router{
        return this._router;
    }

    protected constructor(prefix:string){
        this._prefix = prefix;
        this.initRouters();
    }

    //Inicializa las rutas
    protected abstract initRouters():void;
}