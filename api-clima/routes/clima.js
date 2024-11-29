const express = require('express');
const { getCiudadByName } = require('../models/ciudad');
const { getClimaByCiudadId, addClima } = require('../models/clima');

const router = express.Router();

router.get('/', (req, res) => {
  const { pais, ciudad } = req.query;

  if (!pais || !ciudad) {
    return res.status(400).json({ error: 'Debe proporcionar el nombre del país y la ciudad.' });
  }

  const ciudadEncontrada = getCiudadByName(ciudad, pais);
  if (!ciudadEncontrada) {
    return res.status(404).json({ error: 'Ciudad no encontrada.' });
  }

  const clima = getClimaByCiudadId(ciudadEncontrada.id);
  res.json(clima);
});

router.post('/', (req, res) => {
  const { ciudad_id, temperatura, humedad, presion } = req.body;

  if (!ciudad_id || temperatura == null || humedad == null || presion == null) {
    return res.status(400).json({ error: 'Faltan campos obligatorios: ciudad_id, temperatura, humedad, presion.' });
  }

  const nuevoClima = addClima({ ciudad_id, temperatura, humedad, presion });
  res.status(201).json(nuevoClima);
});

module.exports = router;
