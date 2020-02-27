import React, { Component } from 'react';


class AddForm extends Component{
    state = {
        name : null,
        belt : null
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.id]:  e.target.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addNinja({...this.state});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'> Name: </label>
                    <input id='name' type='text' onChange={this.handleChange}></input>
                    <label htmlFor='name'> Belt: </label>
                    <input id='belt' type='text' onChange={this.handleChange}></input>
                    <button>Subit</button>
                </form>
            </div>
        )
    }
}

export default AddForm;