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

describe('Ucuenca Notes', () => {
  it('Check 0302068309\'s notes.', (done) => {
    uc.notes({ studentId: '0302068309', careerId: 34, periodId: 115 }, (err, res) => {     
      const schedulePath = path.join(TEST_RESOURCES, 'schedule.json');
      const dataExpected = {}; // TODO: Check student notes
      assert.isEmpty(res);
      done();
    })
  });

   it('Check invalid student\'s notes.', (done) => {
    uc.notes({ studentId: '1234567890', careerId: 34, periodId: 115 }, (err, res) => {     
      assert.isEmpty(res);
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
      assert.isEmpty(res);
      done();
    });
  });
});

describe('Ucuenca Curriculum Progress', () => {
  it('Check 0104926787\'s curriculum_progress.', (done) => {
    uc.curriculum_progress({ studentId: '0104926787', careerId: 44, curriculumId: 1, careerPlan:4 }, (err, res) => {
      const schedulePath = path.join(TEST_RESOURCES, 'curriculum_progress.json');
      fs.readFile(schedulePath, 'utf8', function(err, contents) {
        const dataExpected = JSON.parse(contents);
        expect(res).to.eql(dataExpected);
      });
      done();
    })
  });
  it('Check invalid student\'s curriculum_progress.', (done) => {
    uc.curriculum_progress({ studentId: '1234567890', careerId: 44, curriculumId: 1, careerPlan:4 }, (err, res) => {
      const schedulePath = path.join(TEST_RESOURCES, 'curriculum_progress.json');
      assert.isEmpty(res);
      done();
    })
  });
});  

describe('Ucuenca Authentication', () => {
  it('Check wrong password.', (done) => {
    uc.authentication({ user: 'edisson.reinozo', passw: 'NotThisOne' }, (err, res) => {
      assert.isFalse(res[0]['Autenticacion']);
      done();
    });
  });
});  