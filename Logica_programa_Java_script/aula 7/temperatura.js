function temp() {
    var temperatura = Number(prompt("Digite sua temperatura"))
    var escolha = prompt("digite F para fahrenheit ou C para celsius")
    var fahrenheit = ((temperatura * 9 / 5) + 32)
    var celsius = (5 / 9) * (temperatura - 32)


    switch (escolha) {
        case "F":
            alert("° \n Fahrenheit: " + fahrenheit + "°")
            console.log("° \n Fahrenheit: " + fahrenheit + "°");

            break;
        case "C":
            alert("° \n celsius: " + celsius + "°")
            console.log("° \n ceçsius: " + celsius + "°");
        default:
            alert("deu merda")
            break;
    }

}