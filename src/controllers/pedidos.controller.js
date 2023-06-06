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
const deletePedidoById= (res, req) =>{
    const id= req.params.id
    const indice = pedidos.findIndex( p => p.id = id)
    if(indice ==-1){
        res.status(400).json({mensaje: `ID ${id}incorrecto`})
    }else{
        const pedido = pedidos[indice]
        const borrado = pedidos.splice(indice,1)
        pedido.stock = pedidos.stock +1;

        res.status(201).json({mensaje: `El pedido con ID ${id} fue eliminado`,
                        pedido : pedido
    })
    }
    }
   
        
   

const createPedido = (req, res) =>{
    const nuevoPedido = req.body
    const dniAlumno= require.params.dni
    
    const fechaActual = new Date().toISOString().slice(0, 10)
    pedidos.push(nuevoPedido)
    res.status(201).json(nuevoPedido)
}


module.exports = {
    getAllPedidos,
    getPedidosById,
    createPedido,
    deletePedidoById
 }