import mongoose from "mongoose";

const connectToDb = async () => {
    const url = 'mongodb+srv://yashheda5:AKr8jpZrLxZpfaf1@cluster0.twhk8.mongodb.net/';  // Replace with your database name

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // Adjust this value if needed
        });
        console.log('Database connection established');
    } catch (e) {
        console.error('Database connection error:', e);
    }
};

export default connectToDb;
