import React from 'react';

export const Paragraph = (props) => {
    return (
        <p className={props.class}>{props.text}</p>
    )
}

export default Paragraph;