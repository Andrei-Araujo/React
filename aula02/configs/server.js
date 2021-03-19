// requisita os modulos obrigatorios para criar o servidor
const express = require('express')

// cria as constantes e instancia o servidor
const port = 3200

const server = express()

// adiciona os middlewares no servidor, cada um com sua responsabilidade
// 1o: adiciona o middleware que trata url com caracteres especiais
// 2o: adiciona o middleware quie trava a api para so conversar em json
server.use(express.urlencoded({extended: true}))
server.use(express.json())

//sobe o servidor na porta e enviao callback
server.listen(port, () => console.log(`Servidor no ar na porta ${port}`))

// exporta o modulo default com o resultado do server
module.exports = server