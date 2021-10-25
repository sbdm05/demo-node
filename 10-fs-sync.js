
// Synchronous = Bloquant
const  { readFileSync, writeFileSync} = require ('fs'); 
console.log('start');

// read 
// 2 params:  file path+ encoding utf-8
const first = readFileSync('./contenu/first.txt', 'utf-8'); 
const second = readFileSync('./contenu/second.txt', 'utf-8'); 

console.log(first, second); 

// create a new file with values
// 2 params: File name, value
writeFileSync('./contenu/result-sync.txt', `Here is the result ${first}, ${second}`); 

// append to a file
// 3 params : file name, value, {flag:'a'}
writeFileSync('./contenu/result-sync.txt', 'AJOUTER', {flag:'a'}); 

console.log('done with this task');
console.log('starting a new task');
