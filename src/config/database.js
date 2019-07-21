import mongoose from 'mongoose';


const initDB = () => {

  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, autoIndex: false });
  mongoose.set('useCreateIndex', true);
  
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}


export default initDB;