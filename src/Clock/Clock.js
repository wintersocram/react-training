import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>Hello, { props.name }</h1>;
}

function CurrentTime(props) {
    return <h2>It is { props.date }</h2>;
}
class Clock extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={ data.name } />
                <CurrentTime date={ data.date(this.props.date) } />
            </div>
        );
    }
}
const data = {
    name: "John Doe",
    date: date => date.toLocaleTimeString()
};

function tick() {
    ReactDOM.render(<Clock date={ new Date() } />, document.getElementById('root'));    
}

export default function SetClock() {
    setInterval(tick, 1000);
}
