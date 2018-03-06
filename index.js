const querystring = require('querystring');
const http = require('http');

const BASE_URL = "http://evaluacion.ucuenca.edu.ec/ucuenca-rest-ws/api/v1/"

class Ucuenca {
  careers(student_id) {
    const response = this.get('registroacademico', {'idEstudiante': student_id});
    return response;     
  }

  notes(student_id, career_id, period_id){
    const params = {
      'idEstudiante': student_id,
      'idCarrera': career_id,
      'idPerlec': period_id
    }

    return this.get('registroacademico/notas', params);
  }

  schedule(student_id){
    const params={
      'idEstudiante': student_id,
      'idCarrera': career_id,
      'idMalla': curriculum_id,
      'idPlacar': career_plan
    }
    return this.get('registroacademico/malla', params);
  }

  authentication(user, passw){
    const params={
      'usuario': user,
      'pass': passw
    }
    return this.get('acceso', params);
  }

  get(service_name, params){
    const url = this.get_url(service_name, params);
    const response = this.request(url);
    return response;
  }

  get_url(service_name, params){
    return `${BASE_URL}${service_name}?${querystring.stringify(params)}`;
  }

  request(url){
    let data = '1';
    http.get(url, (res) => {
      const { statusCode } = res;
      
      let error;
      if(statusCode !== 200){
        error = new Error('Request Failed.\n' + 
                          `Status Code: ${statusCode}`);
      }

      if (error) {
        console.error(error.message);
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chuck) => { rawData += chuck; });
      
      res.on('end', () => { 
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      }).on('error', (e) => {
        console.error(e.message);
      });
      

    });
    return data;
  } 
}

uc = new Ucuenca();

console.log(uc.careers(1400757116));
