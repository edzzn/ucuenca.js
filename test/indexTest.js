const path = require('path');
const assert = require('chai').assert;
const fs = require('fs');

const Ucuenca = require('../index.js');
const uc = new Ucuenca();
const TEST_RESOURCES = path.join(__dirname, 'tests_resources');

describe('Ucuenca career', () => {
  it('Check 0104926787\'s careers.', (done) => {
    uc.careers({ studentId: '0104926787' }, (err, res) => {
      const careerPath = path.join(TEST_RESOURCES, 'careers.json');
      fs.readFile(careerPath, 'utf8', function(err, contents) {
        assert(contents, res);
      });
      done();
    })
  });

  it('Check invalid student\'s careers.', (done) => {
    uc.careers({ studentId: '1234567890' }, (err, res) => {     
      assert.isEmpty(res);
      done();
    });
  });

  it('Check valid student\'s careers has data.', (done) => {
    uc.careers({ studentId: '0104926787' }, (err, res) => {     
      assert.isNotEmpty(res);
      done();
    });
  });
});
