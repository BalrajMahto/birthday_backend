import Wish from "../models/Wish.js";

export const createWish = async(req,res)=>{

try{

const {wish}=req.body;

const data=await Wish.create({

wish

});

res.status(201).json({

success:true,

message:"Wish Stored",

data

});

}catch(err){

res.status(500).json({

success:false,

message:err.message

});

}

}