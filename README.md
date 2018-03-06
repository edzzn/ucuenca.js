# ucuenca.js
Librería de Python para la API de la Universidad de Cuenca

## UNDER DEVELOPMENT!!

## Install

`npm install --save ucuenca`


## Descripción

Librería de JavaScript para la API de la [Universidad de Cuenca](http://www.ucuenca.edu.ec/). Basada en [ucuenca.py](https://github.com/stsewd/ucuenca.py)


```javascript
const Ucuenca = require('ucuenca');
const uc = new Ucuenca();
# Un estudiante puede cursar varias carreras,
# obtenemos una sola.
uc.careers('0104926787', (err, res) => {
  if (err) { 
    console.log(err);
    return;
  };
  const career = res[0];
  console.log(career['MALLA']); # MALLA CONTABILIDAD Y AUDITORIA 2008
  console.log(career['FECHA_MATRICULA']); # 2013-03-03 09:37:08.0
});
```