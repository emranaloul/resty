import React from 'react';
import './form.scss';



class Main extends React.Component {
    
    handlerForm = async e =>{
        e.preventDefault();
if(e.target.method.value === 'get'){
    let raw = await fetch(e.target.url.value);
    let data = await raw.json(); 
    this.props.handler(data.results, data.count, raw.headers)
} else {
    throw new Error('This feature is not available currently');
}
    }
render() {
    return (
<main>
    <form onSubmit={this.handlerForm}>
    <label htmlFor="url">URL:</label>
    <input type="url" id="url" required/>
    <button type="submit">GO!</button>
    <input type="radio" id="get" value="get" name="method"  required/>
    <label htmlFor="get">get</label>
    <input type="radio" id="post" value="post" name="method" required/>
    <label htmlFor="post">post</label>
    <input type="radio" id="put" value="put" name="method" required/>
    <label htmlFor="put">put</label>
    <input type="radio" id="delete" value="delete" name="method" required/>
    <label htmlFor="delete">delete</label>

    </form>
    {/* <p>{`${this.state.Data}      ${this.state.URL}`}</p> */}
    </main>
    )
}

}

export default Main;