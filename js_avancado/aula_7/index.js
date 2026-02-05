let resposeParse = [];

const getTodos = async () => {
    let response = await fetch("http://localhost:3000/carros");
    resposeParse = await response.json();

    console.log(resposeParse);
}

const getId = async () => {
    let response = await fetch("http://localhost:3000/carros/2");
    resposeParse = await response.json();

    console.log(resposeParse);
}

const getPost = async () => {
    await fetch("http://localhost:3000/carros", {
        method: 'POST',
        body: JSON.stringify({
            id: "4",
            nome: "moto"
        })
    });
}

const getPut = async () => {
    await fetch("http://localhost:3000/carros/3", {
        method: 'PUT',
        body: JSON.stringify({
            nome: "ford"
        })
    });
}

const getDelete = async () => {
    await fetch("http://localhost:3000/carros/4", {
        method: 'DELETE',
    });
}