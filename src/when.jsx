const When = (props) =>{
    if (props.condition){
        return props.children;
    //    setTimeout(() =>{
    //     }, 0)
    }
    else {
        return null
    }
} 

export default When;