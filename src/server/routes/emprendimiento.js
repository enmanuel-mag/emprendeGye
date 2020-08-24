var express = require('express');
var router = express.Router();
const emprendimiento = require('../models/emprendimiento');


router.get('/', function (req, res, next) {
  emprendimiento
    .findAll()
    .then((emprendimiento) => {
      if (emprendimiento) {
        //console.log(emprendedor);
        res.json(emprendimiento);
      } else {
        res.send('No existe ningún emprendimiento');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.get('/:id', function (req, res, next) {
  emprendimiento
    .findOne({
      where: {
        idEmprendimiento: req.params.id,
      },
    })
    .then((emprendimiento) => {
      if (emprendimiento) {
        res.json(emprendimiento);
      } else {
        console.log('No existe ningún emprendimiento con ese id');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.post('/update/:id', function (req, res, next) {
  console.log('update ', req.body);
  emprendimiento
    .update(req.body, {
      where: {
        idEmprendimiento: req.params.id,
      },
    })
    .then((emprendimiento) => {
      if (emprendimiento) {
        res.json(emprendimiento);
        console.log('Se pudo actualizar los datos de emprendimiento');
      } else {
        console.log('No se pudo actualizar los datos de emprendimiento');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

router.get('/delete/:id', function (req, res, next) {
  console.log('Borrando ', req.body);
  emprendimiento
    .destroy({
      where: {
        idEmprendimiento: req.params.id,
      },
    })
    .then((rowsDeleted) => {
      if (rowsDeleted === 1) {
        console.log('Dato único eliminado correctamente');
      }
    })
    .catch((err) => {
      console.log('Error ', err);
      res.send('Error: ' + err);
    });
});

module.exports = router;
