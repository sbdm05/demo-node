const path = require('path'); 

console.log(path.sep);//returns /

const filePath = path.join('/contenu', 'sous-dossier', 'info.txt'); 
console.log(filePath, 'filePath');

const base = path.basename(filePath); 
console.log(base);

const absolute = path.resolve (__dirname, 'contenu', 'sous-dossier', 'info.txt'); 
console.log(absolute, 'absolute');
