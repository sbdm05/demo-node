// Modules
const noms = require('./4-noms'); 
// ou const {pierre, julie} => technique du destructuring
const direBonjour = require('./5-fonctions'); 

direBonjour(noms.pierre); 
direBonjour(noms.julie); 
direBonjour(noms.prive); // undefined

const autres = require('./6-autresEcritures'); 
console.log(autres); // objet exports
console.log(autres.tab); // variable tab

// dans app.js
require('./7-autoExe'); 
