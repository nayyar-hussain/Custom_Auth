import mongoose from "mongoose";

export interface IUserDocu {
    _id : mongoose.Types.ObjectId,
    name : string,
    email : string,
    password : string
}

export interface IUser {
    _id : string,
    name : string,
    email : string,
    password : string
}