const db = require('../data/db.json');

const getCiudadByName = (nombre, pais) => {
  return db.ciudades.find(ciudad => ciudad.nombre === nombre && ciudad.pais === pais);
};

const addCiudad = (ciudad) => {
  const id = db.ciudades.length + 1;
  const nuevaCiudad = { id, ...ciudad };
  db.ciudades.push(nuevaCiudad);
  return nuevaCiudad;
};

module.exports = { getCiudadByName, addCiudad };
