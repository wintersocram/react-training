import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppBase from './AppBase/AppBase';
// import HelloWorld from './HelloWorld/HelloWorld';
// import SetClock from './Clock/SetClock';
import GetForm from './formTest1/formTest'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GetForm />, document.getElementById('root'));

// SetClock();

// OR
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, Clock!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
