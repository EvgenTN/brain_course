import React, { Component } from 'react';


export default class About extends Component {
    handleSubmit =(e) => {
        e.preventDefault();
        console.log(e.target);
        const value = e.target.elements[0].value;
        window.localStorage.setItem('_login', value);
    }
    render () {
        return (
            <div>
                <h1>This is About page</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='enter text'/>
                    <button 
                        type='submit'
                    >
                        Enter
                    </button>
                </form>
            </div>
        )
    };
}