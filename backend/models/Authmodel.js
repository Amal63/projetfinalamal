const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        userEmail: {
            type:String,
            required: true,
        },
        password: {
            type: String,
            required:true,
        },
        conpassword:{
            type:String,
            required:true,

        },

    },
    { collection: "UserSignUp" }
  );
  
  module.exports = mongoose.model("Auths", UsersSchema);