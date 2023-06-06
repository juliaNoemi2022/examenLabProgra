const pedidos= require ('../../data/pedidos.json');

const getAllPedidos = (req, res)=> {
    res.json( pedidos ).status(200)
}

const getPedidosById= (req, res)=>{
    const id = req.params.id
    const resultado = pedidos.find( pedido=> pedido.id == id)
    if(resultado){
      res.status(200).json(resultado)
    }else{
        res.status(404).json({mensaje:`La vianda con codigo  ${codigo} no fue encontrada `})
    }
  
}


const createPedido = (req, res) =>{
    const datos = req.body
    const fecha = new Date().toISOString().slice(0, 10)
   
      
  res.status(201).json (datos)

}


module.exports = {
    getAllPedidos,
    getPedidosById,
    createPedido
 }