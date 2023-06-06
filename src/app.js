const express = require ('express');
const app = express(); 

const PORT = process.env.PORT ||3000;



const alumnosRouter = require('./routes/alumnos.route')
const viandasRouter = require('./routes/viandas.route')
const pedidosRouter = require('./routes/pedidos.route')

app.use(express.json())
app.use('/alumnos',alumnosRouter.router)
app.use('/viandas', viandasRouter.router)
app.use('/pedidos', pedidosRouter.router)

app.listen(PORT, ()=>{console.log(`App lista escuchando en el puerto ${PORT}`)});