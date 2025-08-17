function sumaEnteros(a, b) {
  return a + b;
}
function getNumeroAsync() {
  return new Promise(resolve => {
    setTimeout(() => resolve(42), 500); // simula demora
  });
}

module.exports = {
    sumaEnteros,
    getNumeroAsync
};
