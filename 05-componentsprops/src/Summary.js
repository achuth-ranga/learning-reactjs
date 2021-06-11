import React from 'react';
import ActionButton from './ActionButton'

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
                {/* <button className="btn btn-primary btn-sm" 
                onClick={props.reverseNamesCallback}>Reverse</button> */}
                <ActionButton theme="primary" name="Reverse" 
                callback={props.reverseNamesCallback}></ActionButton>
            </td>
            <td>
                {/* <button className="btn btn-info btn-sm" 
                onClick={() => props.promoteCallback(props.name)}>Promote</button> */}
                <ActionButton 
                callback={() => props.promoteCallback(props.name)}
                disabled="true"></ActionButton>
            </td>
        </React.Fragment>
    } else {
        return null;
    }
}

export default Summary;