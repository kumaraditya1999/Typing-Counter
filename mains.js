var compare_text=document.querySelector("p");
// console.log(compare_text.textContent);
var time=0;


// var stopper;

var result=document.getElementById("result");




var text=document.querySelector("input");
function start(){
	    window.setInterval(function(){time++},10);
}


text.addEventListener('keydown', function (e){   
 
// console.log(e);
  // console.log(e.target.value);  
  // console.log(compare_text.textContent.length);
  //  console.log(e.target.value.length);
   // console.log(time);
  if(time==0) start();
  var n = compare_text.textContent.startsWith(e.target.value, 0);
  
 if(n==false&&e.key!="Backspace")
 	{e.preventDefault();
 		text.style.backgroundColor = "red";}

 else if(n==true&&e.target.value.length==((compare_text.textContent.length)-1))
 	{    var time2=time/100; 
 		result.textContent="Your typing speed is "+ compare_text.textContent.length/time2 +" characters per seconds" ; 
           }
 else{text.style.backgroundColor = "#01FF0A" ; }
 	
 // console.log(n) ;     
                 });





