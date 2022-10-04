import mongoose from 'mongoose';

class Database{
    constructor() {
        this.mongoCreateConn();
    }

    async mongoCreateConn(){
        await mongoose.connect("mongodb://mongodb_magndoces:27017/db_magndoces").then(() => {
            console.log("Connection is ready");
        }).catch((error)=>{
            console.log(`Error: ${error}`);
        })
    }
}

export = new Database();