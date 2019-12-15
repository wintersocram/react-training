import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock'

export default function SetClock() {
    ReactDOM.render(
        <Clock />, 
        document.getElementById('root')
    );
}
