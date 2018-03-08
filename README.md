[![Build Status](https://travis-ci.org/edzzn/ucuenca.js.svg?branch=master)](https://travis-ci.org/edzzn/ucuenca.js)
[![npm version](https://badge.fury.io/js/ucuenca.svg)](https://badge.fury.io/js/ucuenca)
[![GitHub license](https://img.shields.io/github/license/edzzn/ucuenca.js.svg)](https://github.com/edzzn/ucuenca.js/blob/master/LICENSE)


# ucuenca.js
Librería de Python para la API de la Universidad de Cuenca

# Importante
Paquete es funcional y tiene una suite de pruebas básicas.

Pienso que no hay necesidad de modificar al menos la forma de acceso a los recursos.

Cualquier recomendación o duda pueden escribirme.

Es repositorio es publico y toda ayuda o mejora es bienvenida.

Necesita
- [x] Es funcional
- [x] Tiene tests y CI
- [X] Completar las pruebas
- [ ] Reescribir el paquete (Optimizar)

## Install

`npm install --save ucuenca`


## Descripción

Librería de JavaScript para la API de la [Universidad de Cuenca](http://www.ucuenca.edu.ec/). Basada en [ucuenca.py](https://github.com/stsewd/ucuenca.py)


```javascript
const Ucuenca = require('ucuenca');
const uc = new Ucuenca();
// Un estudiante puede cursar varias carreras,
// obtenemos una sola.
uc.careers({ studentId: '0104926787' }, (err, res) => {
  if (err) { 
    console.log(err);
    return;
  };
  const career = res[0];
  console.log(career['MALLA']); // MALLA CONTABILIDAD Y AUDITORIA 2008
  console.log(career['FECHA_MATRICULA']); // 2013-03-03 09:37:08.0
});
```