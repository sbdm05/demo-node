const http = require ('http'); 

const server = http.createServer((req, res)=>{
    // Si route est homepage
    if(req.url === "/"){
        // res.write(); 
        // end the request
        res.end('hello')
    }
    // Si route est /contact
    if(req.url === "/contact"){
        //res.write('contact'); 
        // end the request
        res.end('contact')
    }
    // autre route - réponse par défaut
    //res.end('oops'); 
})

// define a server
server.listen(5000); 

