var getChk=new Array();
function alist(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
          
            var output = "";
            for(var i=0;i<response.length;i++){
               
                if(response[i].completed==true){
                    output +="<h4>" + "<input type='checkbox' id='chkbox' checked disabled>"  + " ." + response[i].title + "</h4>" + "<br>";
                }
                else{
                    output += "<h4>" + "<input type='checkbox' id='chkbox2' name='chkreal' onclick='countCheckboxes();' value='che'>" + " ." +response[i].title + "</h4>" + "<br>";
                        
                        
                          
                    }                  
            }
        }
            document.getElementById("list").innerHTML=output;
          
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}


// funtioncount
function countCheckboxes(){
//  
 var a = document.forms["list"];
 var x =a.querySelectorAll('input[type="checkbox"]:checked');
 if(x.length==95)
{
    alert("WOW!!!!! you've completed 5 Tasks");
}

// 
            }
// funtionend