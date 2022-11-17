import Server from "./providers/Server";
import {PORT, NODE_ENV} from "./config"
import express from 'express';
import cors from 'cors';

const app = new Server({
    port:PORT,
    env:NODE_ENV,
    middlewares:[
        express.json(),
        express.urlencoded({extended:true}),
        cors()
    ],
    controllers: [
        BaseController.getInstance()
    ]
});

app.init();