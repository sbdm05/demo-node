// asynchronous = non-bloquant; 
// callback
const  { readFile, writeFile} = require ('fs'); 
console.log('start');
readFile('./contenu/first.txt', 'utf-8', (err, result)=> {
    if(err){
        console.log(err)
        return
    }
    console.log(result, "result"); 
    const first =  result; 
    readFile('./contenu/second.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        console.log(second, 'second');
        writeFile(
            './contenu/result-async.txt', 
            `Here is the result : ${first}, ${second}`, 
            (err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this task')// undefined
            }
        )
    })
})
console.log('starting a new task');