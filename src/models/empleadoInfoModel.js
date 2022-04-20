const mongoose= require('mongoose')
const empleadoInfoSchema= mongoose.Schema({
  name:{
    type:String,
    require:true
  },
  lastName:{
    type:String,
    require:true
  },
  position_job:{
    type:Object,
    require:true,
    position:{
      type:String,
      require:true
    },
    salary:{
      type:Number,
      require:true
    },
    id_department:{
      type:Object,
      require:true,
      department:{
          type:String,
          require:true
      },
      boss_name:{
          type:String,
          require:true
      }
    }
  },


});
module.exports = mongoose.model('EmpleadoInfoCollection',empleadoInfoSchema)