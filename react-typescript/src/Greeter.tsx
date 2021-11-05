import React from 'react';
import { useState } from 'react';
import GreetMessage from './GreetMessage';

const Greeter : React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [greetMsg, setGreetMsg] = useState<string>('');

    const onBtnGreetClick = () => {
       setGreetMsg(`Hi ${userName}, Have a nice day!`);
    };
    
    //type inference
    let x = 100;

    return (
        <div>
            <h1>Greeter</h1>
            <label>Name : </label>
            <input type="text" onChange={ evt => setUserName(evt.target.value)} />
            <button onClick={onBtnGreetClick}>Greet</button>
            <GreetMessage msg={greetMsg} />
        </div>
    );
}
export default Greeter;