const EmpleadoModel = require('../models/empleadoInfoModel')
class peopleBillService {
    /* Promesas y funciones asincronicas
      una funcion asincronica devuelve una promesa
      js es un lenguaje que ejecuta un hilo->solo hace una cosa a la vez
    */
  
    async CreatePerson(Empleado) {
      Empleado.save();
      return Empleado;
    }
    async listPerson() {
      return EmpleadoModel.find();
    }
    async ShowPerson(EmpleadoId) {
      return EmpleadoModel.findById({
        _id: EmpleadoId
      });
  
    }
    async editPerson(EmpleadoId, name, lastName, position_job) {
      return EmpleadoModel.findById({
        _id: EmpleadoId
      }).then(
        (superheroFind) => {
          if (!superheroFind) throw Error('no se encontró el super heroe');
          return EmpleadoModel.updateOne({
            EmpleadoId
          }, {
            name,
            lastName,
            position_job
          });
        }
      );
    }
    async removePerson(EmpleadoId) {
      const Empleado_remove = EmpleadoModel.findById({
        _id: EmpleadoId
      });
      return EmpleadoModel.deleteOne(Empleado_remove);
    }
  
  }
  module.exports = peopleBillService;