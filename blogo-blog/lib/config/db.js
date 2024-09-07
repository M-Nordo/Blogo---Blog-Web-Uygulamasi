import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://username:password@cluster0.jikiu.mongodb.net/blogo')
    console.log("veritabanı bağlandı");
}
