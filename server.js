
var express =require("express");  
var app=express(); 

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Fabrikam Ltd</h1>"+
    "<hr/>"+
    "<ol>"+
          " <li>Fabrikam is a multinational company has their 24 Offices all over world.</li>"+
          " <li>The Head Office is located in New Delhi</li>"+
          " <li>Comapany expertises in natural fabrics and as well material </li>"+
          " <li>to know more Contact us on '0123-67869'</li>"+
   "</ol>");
};
app.get("/",onDefault);  
app.get("/aboutus",onAboutUs); 
var server=app.listen(8081);
console.log("Server is running on port 8081");
