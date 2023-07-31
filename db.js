const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/api-pessoas-node', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o MongoDB estabelecida!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));


module.exports = mongoose;
