function pasuser(form,page) {
    if (form.user.value=="admin") { 
    if (form.pass.value=="12345") {              
    // location="page2.html"
        page();
    } else {
    alert("Invalid Password")
    }
    } else {  alert("Invalid UserID")
    }
    }
    function page(){
        location="page2.html"
    }

    fetch("https://jsonplaceholder.typicode.com/todos")