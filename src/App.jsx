import './App.scss';
import React from 'react'
import Header from './header';
import Form from './form';
import Footer from './footer';
import Results from './results';
import History from './history';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  handlerForm = ( results, count) =>{
   
   this.setState({Headers:{'Content-Type': 'application/json'},Response:{count:count,results:results}})
  }

  // localHandler = (results) =>{
  //   this.setState({local: results})
  //   console.log("🚀 ~ file: App.jsx ~ line 23 ~ App ~ results", this.state)
    
  // }


  render() {
    return (
     <React.Fragment>
       <Header />
       <Form  handler={this.handlerForm}/>
       <div id="container">
       <History/>
       <Results results={this.state} />
       </div>
       <Footer />

     </React.Fragment>
    );
  }
}

// function App() {
// }

export default App;
