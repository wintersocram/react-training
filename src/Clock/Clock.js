import React from 'react';
import ReactDOM from 'react-dom';

export default function Clock() {
    function tick() {
        const element = (
            <div>
                <h1>Hello, Clock!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root'));    
    }
    setInterval(tick, 1000);
}
