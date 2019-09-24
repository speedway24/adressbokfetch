fetch("./adressbok-1.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log(data);
})