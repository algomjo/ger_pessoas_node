const mongoose = require('../db');

const enderecoSchema = new mongoose.Schema({
  cep: String,
  logradouro: String,
  numero: String,
  complemento: String,
  bairro: String,
  cidade: String,
  estado: String,
});

const Endereco = mongoose.model('Endereco', enderecoSchema);

module.exports = Endereco;
