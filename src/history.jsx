import './history.scss'
import React from 'react';

const History = ()=> {
    let data = JSON.parse(localStorage.getItem('history'));
    return (
        <div id="history">
            <ul>
                {data?data.map(element=>{
                return(<li>
                    {element.method}  {element.URL}</li>)
                
                }):null}
            </ul>

        </div>
        
    )

}

export default History;