const assert = require('chai').assert;
const main = require('../main');
//resultados

describe('Pruebas de sumaEnteros', function() {
  before(function() {
    // Se ejecuta UNA VEZ antes de todos los tests
    console.log('Antes de todos los tests');
  });

  after(function() {
    // Se ejecuta UNA VEZ después de todos los tests
    console.log('Después de todos los tests');
  });

  beforeEach(function() {
    // Se ejecuta ANTES de cada test
    console.log('Antes de cada test');
  });

  afterEach(function() {
    // Se ejecuta DESPUÉS de cada test
    console.log('Después de cada test');
  });

  it('Debe retornar 8 cuando sumo 6 + 2', function() {
    assert.strictEqual(main.sumaEnteros(6, 2), 8);
  });

  it('Debe retornar -4 cuando sumo -2 + -2', function() {
    assert.strictEqual(main.sumaEnteros(-2, -2), -4);
  });

  it('Debe retornar 42 de manera asincrónica', async function() {
    const resultado = await main.getNumeroAsync();
    assert.strictEqual(resultado, 42);
  });
});
/* Mocha muestra primero los test asincrónicos y luego los sincrónicos
tambien resalta en rojo los test que tardan mas de 75ms (por defecto)
para advertir que son "lentos", que el test tarda más de lo esperado.
*/
