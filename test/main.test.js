const assert = require('chai').assert;
const main = require('../main');
//resultados

describe('Pruebas de sumaEnteros', function() {
  it('Debe retornar 8 cuando sumo 6 + 2', function() {
    assert.strictEqual(main.sumaEnteros(6, 2), 8);
  });

  it('Debe retornar -4 cuando sumo -2 + -2', function() {
    assert.strictEqual(main.sumaEnteros(-2, -2), -4);
  });
});
