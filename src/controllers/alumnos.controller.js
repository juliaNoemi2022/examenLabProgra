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

const deleteAlumnoByDni= ( req , res)=>{
    const dni = req.params.dni
    const indice = alumnos.findIndex( alumno => alumno.dni == dni)
    if(indice == -1){
        res.status(404).json({
            indice:`La operacion de borrado no pudo ser realizada`,
            mensaje: `El alumno con dni ${dni} no fue encontrado`})
    }else{
        const alumno = alumnos[indice];
        const resultado = alumnos.splice(indice, 1)
        res.status(200).json({
            resultado: "La operacion de borrado se realizo con exito",
            alumno: alumno
                })
    }
}


const updateAlumno = (req, res)=>{
    const alumnosData = req.body
   
    const alumnoExiste = alumnos.find(alumno => alumno.dni ==alumnosData.dni)

    if(!alumnoExiste){
        alumnosData.habilitado = true
        
        
       if( !/^\d{8}$/.test(alumnosData.dni)){
        res.status(400).json({mensaje: `El dni ${alumnosData.dni} es incorrecto, debe poseer 8 digitos`})
       }

       if (alumnos.edad < 17  && alumnosData.edad > 99) {
        return res.status(400).json({ error: 'La edad debe ser mayor a 18 y menor a 99 años.' });
      }
        alumnos.push(alumnosData)

        res.status(201).json({ mensaje: `El alumno con nro dni ${alumnosData.dni} fue creado correctamente`})
        }else{
            res.status(400).json({mensaje: `El alumno con nro dni ${alumnosData.dni} ya existe en el sistema`})
        }

        
}

const createAlumno =()=> {

}



module.exports = {
    getAllAlumnos,
    getAlumnoByDni,
    deleteAlumnoByDni,
    updateAlumno, 
    createAlumno
 }