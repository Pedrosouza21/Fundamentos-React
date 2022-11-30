import React ,{ cloneElement }from "react";


export default props => {
 console.log(typeof props.children.map)
    return (
        <div>
            {props.Children.map(props.children, child=> {
                    return cloneElement(child, props)
            })} 
        </div>
    )
}









