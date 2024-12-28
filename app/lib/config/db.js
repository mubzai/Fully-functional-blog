import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://zamatechsolutions:mniakamlnimilhsm@cluster0.vnpgd.mongodb.net/next-blog-app');
    console.log("DB Connected");
}