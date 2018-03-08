const querystring = require('querystring');
const http = require('http');

const BASE_URL = "http://evaluacion.ucuenca.edu.ec/ucuenca-rest-ws/api/v1/"

class Ucuenca {

  careers(object, callback) {
    const params = {
      idEstudiante: object['studentId']
    }
    const response = this.get('registroacademico', params, callback);
  }


  notes(object, callback){
    const params = {
      idEstudiante: object['studentId'],
      idCarrera: object['careerId'],
      idPerlec: object['periodId']
    }
    return this.get('registroacademico/notas', params, callback);
  }

  schedule(object, callback){
    const params={
      idEstudiante: object['studentId'],
      idCarrera: object['careerId'],
      idMalla: object['curriculumId'],
      idPlacar: object['careerPlan']
    }
    return this.get('registroacademico/malla', params, callback);
  }

  authentication(object, callback){
    const params={
      usuario: object['user'],
      pass: object['passw']
    }
    return this.get('acceso', params, callback);
  }

  get(service_name, params, callback){
    const url = this.get_url(service_name, params);
    const response = this.request(url, callback);
  }

  get_url(service_name, params){
    return `${BASE_URL}${service_name}?${querystring.stringify(params)}`;
  }

  request(url, callback){
    callback = callback || function(){};

    http.get(url, (res) => {
      const { statusCode } = res;     
      let error;
      if(statusCode !== 200){
        error = new Error('Request Failed.\n' + 
                          `Status Code: ${statusCode}`);
        callback(error, null)         
        res.resume();
        return;                         
      }
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chuck) => { rawData += chuck; });
      
      res.on('end', () => { 
        try {
          const parsedData = JSON.parse(rawData);
          callback(error, parsedData);

        } catch (e) {
          callback(e, null);
        }
      }).on('error', (e) => {
        callback(e, null);
      });
    });
  } 
}

module.exports = Ucuenca;