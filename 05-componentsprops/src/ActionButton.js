import React from 'react';
import { SimpleButton } from "./SimpleButton";


export default function ActionButton(props) {
    return (
        // <button
        //     className={`btn btn-${props.theme} btn-sm`}
        //     onClick={props.callback}>
        //     {props.name}
        // </button>)
         <SimpleButton {...props} className={`btn btn-${props.theme} btn-sm`} />
    )
}  

ActionButton.defaultProps = {
    name: "Default Text",
    theme: "warning"
}