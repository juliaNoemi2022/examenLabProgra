const alumnos= require ('../../data/alumnos.json');

const getAllAlumnos = (req, res)=> {
    res.json( alumnos ).status(200)
}


const getAlumnoByDni = (req, res)=>{
    const dni = req.params.dni
    const resultado = alumnos.find( alumno => alumno.dni == dni)
    if(resultado){
      res.status(200).json(resultado).status(200)  
    }else{
        res.status(404).json({mensaje:`El alumno con dni ${dni} no fue encontrado `}).status(404)
    }
  
}



module.exports = {
    getAllAlumnos,
    getAlumnoByDni 
 }