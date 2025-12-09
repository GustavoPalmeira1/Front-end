var tempo = new Date().getMinutes();

const par = function(){
    console.log("seu desconto é de 50%");
}

const impar = function(){
    console.log("seu desconto é de 70%");
}

function desconto() {
    if(tempo%2 ==0 ){
        par()
         
    }else{
        impar()
        
    }
    console.log(tempo);
    
}

desconto()