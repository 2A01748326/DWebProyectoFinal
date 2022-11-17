import { Request, Response } from "express";
import AbstractController from "./AbstractController";

export default class BaseController extends AbstractController{

    private static instance : BaseController;

    public  static getInstance():BaseController{
        if (this.instance) return this.instance;
        this.instance = new BaseController("base");
        return this.instance;
    }
    protected initRouters(): void {
        throw new Error("Method not implemented.");
    }

}