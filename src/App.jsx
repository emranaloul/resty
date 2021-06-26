import './App.scss';
import React from 'react'
import Header from './header';
// import Form from './form';
import Footer from './footer';
// import Results from './results';
import History from './historypage';
import Home from './home';
import Help from './help';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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

       <Header />
       <Switch>
       <Route exact path="/"><Home /></Route>
       <Route exact path="/history"><History /></Route>
       <Route exact path="/help"><Help /></Route>
       <Footer />
       </Switch>
     </Router>

   
    );
  }
}

// function App() {
// }

export default App;
