import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    tick() {
        this.setState({ date: new Date() });
    }

    // lifecycle methods
    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // render method
    render() {
        return (
            <div>
                <Welcome name={ data.name } />
                <CurrentTime date={ data.date(this.state.date) } />
            </div>
        );
    }
}

const data = {
    name: "John Doe",
    date: date => date.toLocaleTimeString()
};

function Welcome(props) {
    return <h1>Hello, { props.name }</h1>;
}
function CurrentTime(props) {
    return <h2>It is { props.date }</h2>;
}


export default function SetClock() {
    ReactDOM.render(
        <Clock />, 
        document.getElementById('root')
    );
}
