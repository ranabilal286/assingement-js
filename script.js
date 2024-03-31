document.getElementById("alert").onclick =function(){
    alert("My name is Muhmmad Bilal")

}
// print my name 
document.getElementById("print").onclick=function(){
    var  name = document.getElementById("input1").value;
    if(name===""){
    alert("Enter your Name in input field.")
    return;
}
     document.getElementById("result").innerHTML=name;
}

// clear statement
document.getElementById("clear").onclick=function(){
   
    document.getElementById("result").innerHTML="";
}
// clear input
document.getElementById("remove").onclick=function(){
    document.getElementById("input1").value="";
}
// add cities
document.getElementById("addcities").onclick=function(){
    
    var add=document.getElementById("input1").value;
    if(add===""){
        alert("Enter your city in input field.")
        return;
    }
    cities.push(add)
    alert (add + " has been added in list")
    
}
// all cities
var cities=["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Sheikhupura","Kashmir" ]
document.getElementById("allcities").onclick=function(){
    

    document.getElementById("result").innerHTML="";
    for( var index=0; index< cities.length; index++){
        document.getElementById("result").innerHTML+=  (index+1) + ")" + cities[index] + "</br>";
    }
}
// table
document.getElementById("table").onclick=function(){
    

    document.getElementById("result").innerHTML="";
    var a=document.getElementById("input1").value;
    if(a===""){
        alert("enter number in Input field.")
        return;
    }
    
    for( var i=1; i<= 10; i++){
        document.getElementById("result").innerHTML +=  a + " * " + i+  "=" + a*i + "</br>";

    }
}