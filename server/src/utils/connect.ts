import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connect =async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/blog-site")
    }catch(e){
        console.log(e);
        process.exit(1)
    }
}

export default connect;