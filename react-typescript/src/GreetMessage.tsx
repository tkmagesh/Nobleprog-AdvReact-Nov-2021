import React from 'react';

/* 
type GreetMessageProps = {
    msg : string;
} 
*/

interface GreetMessageProps {
    msg : string;
}

const GreetMessage : React.FC<GreetMessageProps> = (props) => {
    return <div>{props.msg}</div>;
};

export default GreetMessage;