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

module.exports = router