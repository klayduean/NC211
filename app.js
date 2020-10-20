var htpp = require('http');

htpp.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Hellp NodeJs</h1>')
    res.write('<p>-WOW!!!!!</p>');
    res.end() ;
}).listen(8080);

console.log('NodesJS is running');
console.log('The result is displayed in the Command Line Interface');