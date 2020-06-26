const express = require('express');
const router = express.Router();
const ctrlDatos = require('../controlador');

const path = require('path');

router.get('/api/:estado', ctrlDatos.api);

router.get('/api2/:id', ctrlDatos.api2)

module.exports = router;