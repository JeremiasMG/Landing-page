const express = require('express')
const app = express()
const path = require('path')


//ajustes
app.set('puerto', 3000)

//middlewares
app.use(express.static(path.join(__dirname, 'Landing')))

app.listen(app.get('puerto'), () => {
    console.log(`Aplicacion corriendo en el puerto ${app.get('puerto')}`)
})