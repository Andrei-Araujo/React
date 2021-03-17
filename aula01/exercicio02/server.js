// requisitou o módulo http do Node.js
const http = require('http')

// criamos uma função que vai tratar todas as requisicoes feitas no nosso servidor e vamos retrnar uma resposta padrao
//const tratamentoRequisicoes = function(requisicao, resposta){
//    resposta.writeHead(200, { "Content-Type" : "text/html"})
//    resposta.write("<h1>Meu primeiro site Node.js</h1>")
//    resposta.end()
//}

//const tratamentoRequisicoes = (_, resposta) => {    // _ é uma boa pratica para nao permitir que o programa  use a variavel requisicao, necessaria para usar essa funcao
//    resposta.writeHead(200, { "Content-Type" : "text/html"})
//    resposta.write("<h1>Meu primeiro site Node.js</h1>")
//    resposta.end()
//}

const tratamentoRequisicoes = (requisicao, resposta) => {
    resposta.writeHead(200, { "Content-Type" : "text/html"})

    if(requisicao.url && requisicao.url.includes('ola')){
        resposta.write("ola")
    }else{
        resposta.write("<h1>Meu primeiro site Node.js</h1>")
    }
    resposta.end()
}

//cria constante para o servidor, cujo valor é o resultado da função createServer (passando o tratamento das requisições)
const servidor = http.createServer(tratamentoRequisicoes)

// subiu nosso servidor na porta 3000 e notificou no console (por meio de callback) que o servidor está no ar
//servidor.listen(3000, function(){
//    console.log('Servidor no ar na porta:3000');
//})

servidor.listen(3000, () => console.log('Servidor no ar na porta:3000'))