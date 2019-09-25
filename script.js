fetch("./adressbok-1.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
   
    for(var i = 0; i < data.length; i++){
       // var element = document.createElement("ul");
      
    }
    document.getElementsByClassName("list-element").innerHTML = data;
    console.log(data);
})