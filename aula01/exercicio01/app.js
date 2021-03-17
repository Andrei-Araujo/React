const mod01 = require('./modulo01') // é uma funcao
//const mod02 = require('./modulo02') // é um objeto
const {funcaoConsole, funcaoConsole2} = require('./modulo02')   // destructor: usa so a funcao que vai precisar (bom por seguranca)
const { module03 } = require('./modulo03')  // o que foi exportado foi o module03, e nao as funcoes; logo, importar o que foi exportado

const http = require('http')

mod01('Meu primeiro módulo Node.js')
//mod02.funcaoConsole('Meu segundo módulo Node.js')
//mod02.funcaoConsole2('Meu segundo módulo Node.js')

funcaoConsole('Meu segundo módulo Node.js') // nao precisa mais usar mod02
funcaoConsole2('Meu segundo módulo Node.js')

module03.funcao('Meu terceiro modulo Node.js')  // a semantica desse (exportacao nominal) é melhor do que a exportacao default (como a do mod01)