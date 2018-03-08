const path = require('path');
const assert = require('chai').assert;
const expect = require('chai').expect;
const fs = require('fs');

const Ucuenca = require('../index.js');
const uc = new Ucuenca();
const TEST_RESOURCES = path.join(__dirname, 'tests_resources');

describe('Ucuenca Career', () => {
  it('Check valid 0104926787\'s careers', (done) => {
    uc.careers({ studentId: '0104926787' }, (err, res) => {
      const careerPath = path.join(TEST_RESOURCES, 'careers.json');
      fs.readFile(careerPath, 'utf8', function(err, contents) {
        const dataExpected = JSON.parse(contents);
        expect(res).to.eql(dataExpected);
        done();
      });
    })
  });

  it('Check invalid student\'s careers', (done) => {
    uc.careers({ studentId: '1234567890' }, (err, res) => {
      assert.isEmpty(res);
      done();
    });
  });

  it('Check valid student\'s careers has data', (done) => {
    uc.careers({ studentId: '0104926787' }, (err, res) => {     
      assert.isNotEmpty(res);
      done();
    });
  });
});


describe('Ucuenca Schedule', () => {
  it('Check 0104378690\'s schedule.', (done) => {
    uc.schedule({ studentId: '0104378690' }, (err, res) => {
      const schedulePath = path.join(TEST_RESOURCES, 'schedule.json');
      fs.readFile(schedulePath, 'utf8', function(err, contents) {
        const dataExpected = JSON.parse(contents);
        expect(res).to.eql(dataExpected);
      });
      done();
    })
  });

   it('Check invalid student\'s schedule.', (done) => {
    uc.schedule({ studentId: '1234567890' }, (err, res) => {     
      console.log(`res: ${res}`);
      assert.isEmpty(res);
      done();
    });
  });
});  