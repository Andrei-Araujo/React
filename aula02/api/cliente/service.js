const {ClienteSchema} = require('./model')

ClienteSchema.methods(['get', 'post', 'put', 'delete'])
ClienteSchema.updateOptions({new: true, runValidator: true})

exports.ClienteService = ClienteSchema