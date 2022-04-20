const express = require ('express')
const router_empleado= express.Router();
const empleadoBillSchema= require('../models/empleadoInfoModel')
/* http://localhost:5000/api/v1/people/empleado */
router_empleado.post('/empleado',(req,res)=>{
  const empleado=empleadoBillSchema(req.body)
  empleado.save()
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

/* http://localhost:5000/api/v1/people  */
router_empleado.get('/',(req,res)=>{

  empleadoBillSchema
  .findById()
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});

/*  http://localhost:5000/api/v1/people/empleado/empleadoId*/
router_empleado.get('/:empleadoId',(req,res)=>{
const {empleadoId}=req.params;
empleadoBillSchema
  .findById(empleadoId)
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
});
/*http://localhost:5000/api/v1/people/empleado/empleadoId  */
router_empleado.put('/empleadoId',(req,res)=>{

  const {empleadoId}=req.params;
  const {name,lastname,position_job={position,salary,id_department :{ department, boss_name }}}=req.body;
  empleadoBillSchema
   .updateOne({_id:empleadoId},{$set:{name,lastname,dni,address}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));


});
/*  http://localhost:5000/api/v1/people/empleado/empleadoId*/
router_empleado.delete('/empleadoId',(req,res)=>{

  const {empleadoId}=req.params;
  const {name,lastname,position_job={position,salary,id_department :{ department, boss_name }}}=req.body;
  empleadoBillSchema
  .deleteOne({_id:empleadoId},{$set:{name,lastname,position_job}})
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));

});
module.exports = router_empleado