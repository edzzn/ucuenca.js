# ucuenca.js
Librería de Python para la API de la Universidad de Cuenca - Port of https://github.com/stsewd/ucuenca.py

## Descripción

Librería de JavaScript para la API de la [Universidad de Cuenca](http://www.ucuenca.edu.ec/). Basada en [ucuenca.py](https://github.com/stsewd/ucuenca.py)


```python
from ucuenca import Ucuenca

const uc = Ucuenca()
# Un estudiante puede cursar varias carreras,
# obtenemos una sola.
const careers = uc.careers('0104926787')[0]
careers['malla']  # MALLA CONTABILIDAD Y AUDITORIA 2008
careers['fecha_matricula']  # 2013-03-03 09:37:08.0
```