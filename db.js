const mongoose=require("mongoose")

const connectDB=async ()=>{
  try{
     const connection=await mongoose.connect(
        "mongodb+srv://kbhagod:kbhagod%401234@cluster0.yrv7fdz.mongodb.net/?retryWrites=true&w=majority",
        {
           useNewUrlParser: true,
           useUnifiedTopology: true,
        }
     );
     console.log("mongoDB connected");
  }
  catch(error){
      console.log(error)
      process.exit(1)
  }
};
module.exports=connectDB;
