//Alessandro Vendramini

const express = require('express');
const router = express.Router();
const lista = require('../dati/lista')

//Stampa tutto l'oggetto
router.get(
    
    '/',
    function (req, res, next) {
            
        res.send(lista);
    }
)

//Stampa tramite l'id l'oggetto
router.get(

  '/:id',
  function (req, res) {
    
    const parametroId = Number(req.params.id)
    res.json( 
        
        lista.lista.filter(lista => lista.id === parametroId)
    )
  }
)

// Metodo post sul titolo
router.post('/form', (req, res) => {
  
  const body = req.body
  const {  
    id,
    titolo,
    descrizione,
  } = req.body

  const status = {}
  console.log(id, titolo, descrizione)
  if (titolo){
    
    status.code = 'Hai selezionato'
    status.message = `Pizza: ${titolo}`
  } else {
    
    status.code = 'error'
    status.message = 'titolo non valido'
    status.campo = 'titolo'
  }
  res.send(status)
})

//Delete sull ID
router.delete('/form', (req, res) => {
  
  const body = req.body
  const {  
    id,
    titolo,
    descrizione,
  } = req.body

  const status = {}
  console.log(id, titolo, descrizione)
  if (id){
    
    status.code = 'Cancellazione'
    status.message = `ID: ${id}`
  } else {
    
    status.code = 'error'
    status.message = 'id non valido'
    status.campo = 'id'
  }
  res.send(status)
})

//Update sull ID
router.put('/form', (req, res) => {
  
  const body = req.body
  const {  
    id,
    titolo,
    descrizione,
  } = req.body

  const status = {}
  console.log(id, titolo, descrizione)
  if (id){
    
    status.code = 'Aggiornamento'
    status.message = `ID: ${id}`
  } else {
    
    status.code = 'error'
    status.message = 'id non valido'
    status.campo = 'id'
  }
  res.send(status)
})

module.exports = router