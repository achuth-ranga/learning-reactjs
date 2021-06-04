import React from 'react';

let Message = (props) => {
    let classes;
    switch (props.name) {
        case "Achuth":
            classes = "bg-primary text-center text-white p-2"
            break;
        case "Bond":
            classes = "bg-danger text-center text-white p-2"
            break;
        default:
            classes = "bg-warning text-center text-white p-2"
            break;
    }
    return <h4 className={classes}>
        {props.name + " --> " + props.greeting}
    </h4>
}
export default Message;