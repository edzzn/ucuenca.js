const assert = require('chai').should();
const should = require('chai').assert;
const expect = require('chai').expect;

const Ucuenca = require('../index.js');
const uc = new Ucuenca();


describe('Ucuenca career', () => {
  it('career shoudl not return an error', (done) => {
    uc.careers('0104926787', (err, res) => {
      
      expect(err).to.not.exist;
      done();
    })
  });

  it('Ucuenca returns career if a int is passed as a student_id', (done) => {
    uc.careers('0104926787', (err, res) => {
      const career = res[0];
      const fecha_matricula = career['FECHA_MATRICULA'];
      fecha_matricula.should.equal('2013-03-03 09:37:08.0');
      done();
    });
  });

});
