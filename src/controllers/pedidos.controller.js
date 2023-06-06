const pedidos= require ('../../data/pedidos.json');

const getAllPedidos = (req, res)=> {
    res.json( pedidos ).status(200)
}

const getPedidosById= (req, res)=>{
    const id = req.params.id
    const resultado = pedidos.find( pedido=> pedido.id == id)
    if(resultado){
      res.status(200).json(resultado).status(200)  
    }else{
        res.status(404).json({mensaje:`La vianda con codigo  ${codigo} no fue encontrada `}).status(404)
    }
  
}


const createPedido = (req, res) =>{

}


module.exports = {
    getAllPedidos,
    getPedidosById,
    createPedido
 }