


var display=document.getElementById("output-screen")
var result=document.getElementById("result")
function output(event){
   // let display=document.getElementById("output-screen")
    display.textContent+=event.target.value
    result.textContent=eval(display.textContent)
     
}
  
//function output1(event){
//    display.textContent+=event.target
//}    
 var input1=document.getElementById("four1")

function calaulator(){
    
    
    var sqrt=Math.sqrt
    var π=Number(Math.PI)
   try{ display.textContent=eval(display.textContent)}
   catch(err){
    result.textContent="error"
   }
   result.textContent=""
}
function clean(){
    display.textContent="";
}
function delet(){
    display.textContent=display.textContent.slice(0,-1)
}

    
    
