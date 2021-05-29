const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const hostname ='127.0.0.1';
const port = 80;
//EXPRESS STUFF
app.use('/static', express.static('static'));//for serving static file that can be used by if they have the url{urlbelow('/static')}
app.use(express.urlencoded());//used to get Html form data in backend

//PUG SPECIFIC STUFF
app.set('view engine' , 'pug')//setting  template engine as pug
app.set('views' , path.join(__dirname, 'views'))//setting view directory

//ENDPOINT
app.get('/',(req,res)=>{
    const para= {'title': 'Plain html is used', 'Content':'this ubsdyvdcbsaugaskjb assgbqwksgiusvwqkg'};
    res.status(200).render('index.pug', para);
});
app.post('/',(req,res)=>{
   // console.log(req.body);//used to print the data in backend as a object
   name=req.body.name;
   age=req.body.age;
   gender=req.body.gender;
   address=req.body.address;
   more=req.body.more;

let outputToWrite = `the name of the client is ${name} \n, ${age} years old \n, ${gender}\n, residing at ${address}\n. More about him/her: ${more}`
   fs.writeFileSync('output.txt', outputToWrite );//to print/save  the data of the form html in a txt file
    const para= {'message': 'Your message is recieved '};
    res.status(200).render('index.pug', para);
});


//START SERVER
app.listen(port,hostname , ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
