import React from "react";

class Botaos extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            numero:0
        }
    }
    numeroMenos = () =>{
        if(this.state.numero>0){
            this.setState({numero: this.state.numero-1})
        }
        
    }
    numeroMais = () =>{
        if(this.state.numero <10){this.setState({numero: this.state.numero+1})}
        
    }

    render(){
        return(
            <>
            <button onClick={this.numeroMenos}>-</button>
            <p>A pagina é {this.state.numero}</p>
            <button onClick={this.numeroMais}>+</button>
            </>
        )
    }
    
}

export default Botaos