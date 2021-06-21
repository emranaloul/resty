import './App.scss';
import React from 'react'
import Header from './header';
import Form from './form';
import Footer from './footer';
import Results from './results';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  handlerForm = ( results, count) =>{
   
   this.setState({Headers:{'Content-Type': 'application/json'},Response:{count:count,results:results}})
  }


  render() {
    return (
     <React.Fragment>
       <Header />
       <Form  handler={this.handlerForm}/>
       <Results results={this.state} />
       <Footer />
     </React.Fragment>
    );
  }
}

// function App() {
// }

export default App;
