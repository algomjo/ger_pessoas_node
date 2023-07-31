const mongoose = require('../db');

const pessoaSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  email: String,
  telefone: String,
  endereco: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Endereco',
  },
});

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;
