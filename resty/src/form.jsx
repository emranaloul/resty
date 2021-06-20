import React from 'react';
import './form.scss';

let URL;
let method;

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            URL : '',
            method: ''
        }
    }
    handlerURL = e =>{
        e.preventDefault()
        URL = e.target.value;
    }

    handlerSelect = e =>{
        e.preventDefault()
         method = e.target.value;
    }
    handlerSubmit = e =>{        
        e.preventDefault()
        this.setState({URL: URL, method: method})
    }
render() {
    return (
<main>
    <form>
    <label htmlFor="url">URL:</label>
    <input onChange={this.handlerURL} type="url" id="url"/>
    <button onClick={this.handlerSubmit} type="click">GO!</button>
    <input onChange={this.handlerSelect} type="radio" id="get" value="get" name="method" />
    <label htmlFor="get">get</label>
    <input onChange={this.handlerSelect} type="radio" id="post" value="post" name="method" />
    <label htmlFor="post">post</label>
    <input onChange={this.handlerSelect} type="radio" id="put" value="put" name="method" />
    <label htmlFor="put">put</label>
    <input onChange={this.handlerSelect} type="radio" id="delete" value="delete" name="method" />
    <label htmlFor="delete">delete</label>
    {/* <p>{this.state.method + '       ' + '  ' + ''   + this.state.URL}</p> */}

    </form>
    <p>{`${this.state.method}      ${this.state.URL}`}</p>
    </main>
    )
}

}

export default Main;