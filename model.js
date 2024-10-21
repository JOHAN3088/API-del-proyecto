const mongoose=require("mongoose");
const userModel= new mongoose.Schema(
    {
    nombre:{
        type: String
    },
    existencias:{
        type:Number
    },
    caracteristicas:{
        type:String
    },
    gramaje:{
        type:String
    }
},
    {
        timestamps: true,
        versionKey:false,
    }
);
const ModelUser = mongoose.model('modMedicamentos',userModel);
module.exports = ModelUser;
