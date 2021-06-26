import './historypage.scss'
import React from 'react';

const History = ()=> {
    let data = JSON.parse(localStorage.getItem('history'));
    
    return (
        <div id="historypage">
            <ul>
                {data?data.map((element,idx)=>{
                return(<li>
                <span>{element.method}</span>   
             {element.URL}   </li>)
                
                }):null}
            </ul>

        </div>
        
    )

}

export default History