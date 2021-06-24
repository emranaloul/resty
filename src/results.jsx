import React from 'react';
import JSONPretty from 'react-json-pretty';

class Results extends React.Component {
    render(){
    return(
        <React.Fragment>
            <p>
                {this.props.results.Response?( <JSONPretty id="json-pretty" data={this.props.results}></JSONPretty> ): null }


            </p> 
            
        </React.Fragment>
    )
    }  
}

export default Results;