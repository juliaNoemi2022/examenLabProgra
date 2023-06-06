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



module.exports = {
    getAllViandas,
    getViandasByCodigo
    

 }