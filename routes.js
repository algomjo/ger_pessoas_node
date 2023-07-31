const express = require('express');
const router = express.Router();

const Pessoa = require('./models/pessoa');
const Endereco = require('./models/endereco');

// Rotas para Pessoa
router.post('/pessoas', async (req, res) => {
  try {
    const endereco = await Endereco.create(req.body.endereco);
    const pessoaData = { ...req.body, endereco: endereco._id };
    const pessoa = await Pessoa.create(pessoaData);
    res.json(pessoa);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar pessoa.' });
  }
});

router.get('/pessoas', async (req, res) => {
  try {
    const pessoas = await Pessoa.find().populate('endereco');
    res.json(pessoas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar pessoas.' });
  }
});

router.put('/pessoas/:id', async (req, res) => {
    try {
      const pessoaId = req.params.id;
      let pessoaData = req.body;
  
      // Se um endereço novo for fornecido, criamos o endereço e obtemos o ID
      if (pessoaData.endereco) {
        const enderecoData = pessoaData.endereco;
        const endereco = await Endereco.create(enderecoData);
        pessoaData = { ...pessoaData, endereco: endereco._id };
      }
  
      const pessoa = await Pessoa.findByIdAndUpdate(pessoaId, pessoaData, { new: true });
      res.json(pessoa);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar pessoa.' });
    }
  });
  
  

router.delete('/pessoas/:id', async (req, res) => {
  try {
    await Pessoa.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pessoa removida com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover pessoa.' });
  }
});

router.post('/enderecos', async (req, res) => {
  try {
    const enderecoData = req.body;
    const endereco = await Endereco.create(enderecoData);
    res.json(endereco);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar endereço.' });
  }
});


module.exports = router;
