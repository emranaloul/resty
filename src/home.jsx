import './App.scss';
import React from 'react'
import Header from './header';
import Form from './form';
import Footer from './footer';
import Results from './results';
import History from './history';
import { BrowserRouter as Router, HashRouter, MemoryRouter } from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  handlerForm = ( results, count, flag) =>{
   
   this.setState({Headers:{'Content-Type': 'application/json'},Response:{count:count,results:results}, flag:flag})
  
   console.log("🚀 ~ file: App.jsx ~ line 21 ~ App ~ this.state", this.state)
  }
  handler = (results) =>{
    let data = JSON.parse(localStorage.getItem('history'))[results];
    
    this.setState({history: data})
  }
  
  render() {
    return (
     <Router>

       <Form  handler={this.handlerForm}/>
       <div id="container">
       <History render={this.handler}/>
       <Results results={this.state} />
       </div>
       <Footer />
     </Router>

   
    );
  }
}

// function App() {
// }

export default App;
