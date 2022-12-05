import mongoose from "mongoose";

const connectDB = async () => {
    MONGODB_URI = 'mongodb+srv://resenhabarber:ResenhaBarber!@cluster0.aijptdt.mongodb.net/?retryWrites=true&w=majority'

    if (mongoose.connections[0].readyState) {
        console.log("Already connected");
        return;
    }
    
    mongoose.connect(MONGODB_URI, {}, (err) =>{
        if (err) throw err;
        console.log("Connected to mongodb.");
    });

};

export default connectDB;