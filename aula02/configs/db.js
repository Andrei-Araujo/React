// requisita o modulo node do mongoose
const mongoose = require('mongoose');

// atribuiu a Promise global do node para a promise do mongoose
// evitar warning de assincrono
mongoose.Promise = global.Promise

// exporta default o resultado da funcao connect
// passando a url de conexao do banco e os param obrigatorios para evitar warnings
module.exports = mongoose.connect('mongodb://localhost:27017/exercicio02DB', { useNewUrlParser: true, useUnifiedTopology: true  })