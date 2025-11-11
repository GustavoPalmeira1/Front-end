function doce() {
    var doces = ["caramelo","Chocolate"];
    
    console.log(doces);

    var caminhão = doces;
    
    var entrega = caminhão.push(prompt("qual o doce que chegou."));
     
    console.log(doces);
}

doce()