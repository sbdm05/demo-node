// module os
// interaction avec le système d'exploitation de l'ordinateur de l'utilisateur
// https://nodejs.org/api/os.html

const os = require('os'); 
// utilisation d'une méthode
// information sur l'utilisateur
const user = os.userInfo();
console.log(user); 

console.log(`système est en fonctionnement depuis ${os.uptime()} secondes`);

const currentOS= {
    name: os.type(), 
    release: os.release(), 
    totalMem: os.totalmem(), 
    freeMem: os.freemem()
}

console.log(currentOS);
