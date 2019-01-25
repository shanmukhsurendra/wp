var x = 0;
var password = "password";
var array = Array();
var array1 = Array();

function add_element_to_array()
{
	var a = document.getElementById("pwd").value;
	var b = document.getElementById("usr").value;
	var p = "password";
	var op = document.getElementById("pwd").value;
	if(a=="" || b=="")
	{
	alert("Please fill all the boxes");
	return ;
	}
	if(op != p) {
		alert("wrong password");
		document.getElementById("text1").value = "";
		document.getElementById("usr").value = "";
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
   var f = "<hr/>";  
    
   for (var y=array.length-1; y>=0; y--)
   {
     e +=  array[y] + "<br/>" ;
     f += + array1[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
   document.getElementById("name").innerHTML = f;
 }

