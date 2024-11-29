const express = require('express');
const { getCiudadByName, addCiudad } = require('../models/ciudad');

const router = express.Router();

router.post('/', (req, res) => {
  const { nombre, pais } = req.body;
  if (!nombre || !pais) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: nombre y pais' });
  }

  const ciudad = addCiudad({ nombre, pais });
  res.status(201).json(ciudad);
});

module.exports = router;
