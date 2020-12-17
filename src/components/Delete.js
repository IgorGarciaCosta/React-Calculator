import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './Delete.css';

class Delete extends Component {
    render() {
        return (
            <div className="delete-btn"
                onClick={()=>this.props.handleDelete()}>
                {this.props.children}
            </div>
        )
    }
}

export default Delete
