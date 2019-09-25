fetch("./adressbok-1.json")
.then(function(resp){
    return resp.json();
})
.then(function (data){
   
    var lista = document.createElement("ul");

    for (var i = 0; i < data.length; i++) {

       
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(data[i]));

       
        lista.appendChild(listItem);
    }
    return lista;
   
    console.log(data);
})
document.getElementById('list').appendChild(function(data[0]));