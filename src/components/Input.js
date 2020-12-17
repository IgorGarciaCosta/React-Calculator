import React, {Component} from 'react'
import './Input.css'
//rfce

//Botões nos quais o usuário clicou

class Input extends Component{

    render() {
        return (
            <div className="input">
                {this.props.children}
            </div>
        )
    }
}

export default Input
