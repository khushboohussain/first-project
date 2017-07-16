const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 8080;

//Body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//GET HTTP 
//why we using this get ??????????????????????????
app.get('/', (req,res)=>{
	res.sendFile(__dirname + '/client/index.html');
});

app.post('/info', (req,res)=>{
	
   let name = req.body.name;
   let email = req.body.Email_id;
   let cell = req.body.cell;
   let dob = req.body.dob;

   var data = {
   	name :name,
   	email : email,
   	cell : cell,
   	dob : dob

   };

   res.json(data);


   // res.send("User Name is "+"'"+ name +"'"+"\n Email id is "+"'"+email +"\n Mobile Number is "+cell +"\t Date of birth is "+dob);
 // res.sendFile(__dirname + '/client/contact.html')
});

//function of these lines  ?????

app.get('/home', (req,res)=>{
	res.sendFile(__dirname + '/client/contact.html')
});

// app.post('/data', (req,res)=>{
//    let data = {
//    	name:'ald'
//    }
// 	res.json()
// })

app.listen(PORT, ()=>{
    console.log(`running on `+PORT)
});