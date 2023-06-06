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


const updateAlumno = (req, res)=>{
    const alumnosData = req.body
   
    const alumnoExiste = alumnos.find(alumno => alumno.dni ==alumnosData.dni)

    if(!alumnoExiste){
        alumnosData.habilitado = true
      if  (alumnosData.celiaco == 'undefined') { alumnosData.celiaco = false}
        alumnos.push(alumnosData)

        res.status(201).json({ mensaje: `El alumno con nro dni ${alumnosData.dni} fue creado correctamente`})
        }else{
            res.status(400).json({mensaje: `El alumno con nro dni ${alumnosData.dni} ya existe en el sistema`})
        }

        
}



module.exports = {
    getAllAlumnos,
    getAlumnoByDni,
    updateAlumno
 }