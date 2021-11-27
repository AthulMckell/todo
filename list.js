function alist(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            // var count = document.getElementById('input[type="checkbox"]:checked').length;
            var output = "";
            for(var i=0;i<response.length;i++){
               
                if(response[i].completed==true){
                    output +="<h4>" + "<input type='checkbox' id='chkbox' checked disabled>"  + " ." + response[i].title + "</h4>" + "<br>";
                }
                else{
                    output += "<h4>" + "<input type='checkbox' id='chkbox2'>" + " ." +response[i].title + "</h4>" + "<br>";
                   
                     
                }
            }
            document.getElementById("list").innerHTML=output;
        
           }
        
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }