import React, { useState } from 'react';

export function HooksButton(props) {

    const [counter, setCounter] = useState(0);
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setCounter(counter + 1);
        setButtonClicked(true);
        props.callback();
    }

    return (<>
        <button onClick={handleClick}
            className={props.className}
            disabled={props.disabled === "true" || props.disabled === true}>
            {props.text} {counter}
            {buttonClicked && <div>Button Clicked!</div>}
        </button></>);

}