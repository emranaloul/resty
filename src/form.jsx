import React from 'react';
import './form.scss';
import axios from 'axios';

function save(){
    let saved = getData();
    
    if(history.length === 0 || history.length === 1 ){
        for(let i in saved){
            history.unshift(saved[i])
        }
    }
        localStorage.setItem('history', JSON.stringify(history));
}
function getData(){
    let information = localStorage.getItem('history');
    if(information){
        information = JSON.parse(information)
        return information;
    }else {return []}
}

let history = [];

class Main extends React.Component {
    componentDidMount(){
       
    }
    handlerForm = async e =>{
        e.preventDefault();
        history.push({method: e.target.method.value, URL:e.target.url.value})
        save()
if(e.target.method.value === 'get'){
    let raw = await fetch(e.target.url.value);
    let data = await raw.json(); 
    this.props.handler(data.results, data.count, raw.headers)
   
} else {

    let body = e.target.body.value;
    let method = e.target.method.value;
    let results = await  axios({
        method: `${method}`,
        url: `${e.target.url.value}`,
        data: JSON.parse(body) ,
      })
      this.props.handler(results.data)
   
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
    <textarea name="body" id="body" cols="30" rows="10"></textarea>

    </form>
    {/* <p>{`${this.state.Data}      ${this.state.URL}`}</p> */}
    </main>
    )
}

}

export default Main;