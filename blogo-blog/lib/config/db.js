import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://nordo:Nordo12345678@cluster0.jikiu.mongodb.net/blogo')
    console.log("veritabanı bağlandı");
}