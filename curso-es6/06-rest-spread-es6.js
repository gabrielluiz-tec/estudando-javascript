"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//**************************************** */
// REST "..."
var usuario = {
  nome: 'Marcelo',
  cidade: 'Porto Alegre',
  estado: 'RS',
  pais: 'Brasil'
}; // A variável 'resto' assumiu todas as oitras propriedades do objeto
// Aqui aplicamos desestruturação

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome, resto); //********************************************* */
// Exemplo com vetores

var lista = [1, 2, 3, 4, 5, 6, 7, 8];
var a = lista[0],
    b = lista[1],
    c = lista.slice(2);
console.log(a);
console.log(b);
console.log(c); //*************************************** */
// Um exemplo utilizando funções
// Usando ES5

function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(2, 4)); // Usando ES6

/* O operador rest "..." vai converter os parâmetros enviados 
   em formato de array */

function somaNumeros() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }

  return numeros.reduce(function (total, proximo) {
    return total + proximo;
  });
} // Imprime um array de números


console.log('Total: ', somaNumeros(2, 4, 5, 6)); //****************************************** */
// SPREAD OPERTOR

var lista1 = [1, 2, 3];
var lista2 = [4, 5, 6];
var lista3 = [].concat(lista1, lista2);
console.log(lista3); // Um exemplo utilizando objeto

var aluno1 = {
  nome: 'Marcelo',
  cidade: 'Porto Alegre',
  estado: 'RS'
};

var aluno2 = _objectSpread({}, aluno1, {
  nome: 'João'
});

console.log(aluno2); //
