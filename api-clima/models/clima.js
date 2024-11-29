const db = require('../data/db.json');

const getClimaByCiudadId = (ciudad_id) => {
  return db.climas.filter(clima => clima.ciudad_id === ciudad_id);
};

const addClima = (clima) => {
  const id = db.climas.length + 1;
  const nuevoClima = { id, ...clima, fecha_actualizacion: new Date().toISOString() };
  db.climas.push(nuevoClima);
  return nuevoClima;
};

module.exports = { getClimaByCiudadId, addClima };
