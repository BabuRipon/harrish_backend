const Mongoose = require("mongoose");

//mongoose schema
const userSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required:true,
  },

})


const Person=Mongoose.model("Person", userSchema);

module.exports=Person;