import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URI!;
let chached = global.mongoose;
if(!chached){
    chached = global.mongoose = {conn : null , promise : null}
}

export const ConnectToDatabase = async () => {
    if(chached.conn){
        return chached.conn
    }

    if(!chached.promise){
        let opt = {
            bufferCommands : false
        }

        chached.promise = mongoose.connect(MONGODB_URI , opt).then(() => mongoose.connection)
    }
    try {
        chached.conn = await chached.promise
        return chached.conn
    } catch (error) {
        throw error
    }
}