const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // res.write('<p>hello, ninjas</p>');


  // routing
  let path = './views/';

  if(req.url=='/')
  {
path+='index.html';
res.write('index file is called ');
res.statusCode=200;


  }


  else if(req.url=='/about')
  {
  path+='about.html';
  res.write('about is called');
  res.statusCode=200;
  

  }

  else{

path+='404.html';
res.write('page is not found ');
res.statusCode=404;


  }
 

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});