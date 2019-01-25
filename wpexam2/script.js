var x = 0;
// var password = "pa";
var array = Array();
var array1 = Array();
var p = "pa";

function add_element_to_array()
{
	var a = document.getElementById("pwd").value;
	var b = document.getElementById("usr").value;
	var op = document.getElementById("pwd").value;
	var c = document.getElementById("text1").value;
	if(a=="" || b=="" || c== "")
	{
	alert("Please fill all the boxes");
	return ;
	}
	if(op != p) {
		alert("wrong password");
		// document.getElementById("text1").value = "";
		// document.getElementById("usr").value = "";
		document.getElementById("pwd").value = "";
		return ;
	}
 array[x] = document.getElementById("text1").value;
 array1[x] = document.getElementById("usr").value;
 x++;

 document.getElementById("text1").value = "";
 document.getElementById("usr").value = "";
 document.getElementById("pwd").value = "";
 	
   var e = "<hr/>";
   // var f = "<hr/>";  
    
   for (var y=array.length-1; y>=0; y--)
   {
     e +=  "<p>" + array[y] + "</p>" + "commented by --> " +array1[y] + "<br/>"+ "<br/>";
     // f += +  + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
   // document.getElementById("name").innerHTML = f;
 }

