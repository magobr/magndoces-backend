import express  from "express";

require("./services/Connection");
import { Routes } from "./routes";


const app = express();

class App {

    constructor(){
        this.middlewares();
        this.routes();
    }

    middlewares(){
        app.use(express.json());
    }

    routes(){
        app.use(Routes);
    }

    runningServer(port: number, callback: Function){
        app.listen(process.env.PORT || port, callback());
    }
}

export { App }