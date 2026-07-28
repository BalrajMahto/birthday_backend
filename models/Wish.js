import mongoose from "mongoose";

const wishSchema = new mongoose.Schema({

    wish:{

        type:String,

        required:true,

        trim:true

    },

    createdAt:{

        type:Date,

        default:Date.now

    }

});

export default mongoose.model("Wish",wishSchema);