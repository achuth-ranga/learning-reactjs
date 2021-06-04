import React from 'react';

let Summary = (props) => {
    if (props.name.length > 3) {
        return <React.Fragment>
            <td>
                {props.index + 1}
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.name.length}
            </td>
            <td>
                <button className="btn btn-primary btn-sm" 
                onClick={props.reverseNamesCallback}>Reverse</button>
            </td>
            <td>
                <button className="btn btn-info btn-sm" 
                onClick={() => props.promoteCallback(props.name)}>Promote</button>
            </td>
        </React.Fragment>
    } else {
        return null;
    }
}

export default Summary;