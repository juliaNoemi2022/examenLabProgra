const viandas = require ('../../data/viandas.json');

const getAllViandas = (req, res)=> {
    res.json( viandas ).status(200)
}

const getViandasByCodigo = (req, res)=>{
    const codigo= req.params.codigo
    const resultado = viandas.find( vianda=> vianda.codigo == codigo)
    if(resultado){
      res.status(200).json(resultado).status(200)  
    }else{
        res.status(404).json({mensaje:`La vianda con codigo  ${codigo} no fue encontrada `}).status(404)
    }
  
}

const updateVianda= (req, res)=>{
    const codigo = req.params.codigo 
    const viandaData = req.body 
    const indice = viandas.findIndex(v=> v.codigo == codigo)
    if ( indice >= 0 ) {
        viandas[indice].aptoCeliaco = viandaData.aptoCeliaco
        viandas[indice].stock= viandaData.stock
        viandas[indice].descripcion =viandaData.descripcion
        
        res.status(201).json({"vianda": viandas[indice]})
    }
    else {
        res.status(404).
        json(
            {
                resultado: "La operación de modicar no pudo ser realizada",
                mensaje: `La vianda con codigo ${codigo} no fue encontrada`
            }
        )
    }

}

const createVianda = (req, res) => {
    const viandaData = req.body
   
    const viandaExiste = viandas.find(v=> v.codigo == viandaData.codigo)

    if(!viandaExiste){

        const valoresDisponibles = ['TARTA', 'POLLO', 'PASTA', 'PIZZA', 'EMPANADAS']
        if (valoresDisponibles.includes(viandaData.tipo)) {
          res.status(201).json({mensaje:"El tipo de vianda existe" });
        } else {
          res.status(400).js({mensaje: "tipo de vianda incorrecta"})
        }
        
        if(viandaData.stock <0){
            res.status(400).json({mensaje: `El stock  ${viandaData.stock} No es mayor o igual a cero`})
        }
        viandas.push(viandaData)
        res.status(201).json({ mensaje: `La vianda con codigo ${viandaData.codigo} fue creada correctamente`})
    }else{
        res.status(400).json({mensaje: `La vianda con codigo ${viandaData.codigo} ya existe en el sistema`})
    }
}


module.exports = {
    getAllViandas,
    getViandasByCodigo,
    updateVianda,
    createVianda 
    

 }