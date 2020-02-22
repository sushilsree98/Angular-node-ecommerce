let express=require('express');
let app=express();
let bodyParser=require('body-parser');
let cors=require('cors');
let array=[];
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(cors());
app.get("/value",function(req,res){
  res.json(array);
})
app.listen(8000);

app.post("/value",function(req,res){
  array.push(req.body);
  console.log(req.body);
  res.json(req.body);
})
