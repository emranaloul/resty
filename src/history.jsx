import './history.scss'
import React from 'react';

const History = ()=> {
    let data = JSON.parse(localStorage.getItem('history'));
    
    return (
        <div id="history">
            <ul>
                {data?data.map((element,idx)=>{
                return(<li>
                <span>{element.method}</span>   
                <button className="idx" id="historyBtn">{element.URL}</button>   </li>)
                
                }):null}
            </ul>

        </div>
        
    )

}

// class History extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history : null
//         }
//     }
//     componentDidMount() {
//         console.log('there')
//      let data = JSON.parse(localStorage.getItem('history'));
//      this.setState({history : data})
//     }
//     handler = (e) => {
        
//         this.props.render(e.target.className)
//     }
//     render() {
//         return (
         
//         <div id="history">
//             <ul>
//                 {this.state.history?this.state.history.map((element,idx)=>{
//                 return(<li key={idx}>
//                 <span>{element.method}</span>   
//                 <button className={idx}  onClick={this.handler}>{element.URL}</button>   </li>)
                
//                 }):null}
//             </ul>

//         </div>
//         )  
//     }
// }

export default History;