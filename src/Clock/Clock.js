import React from 'react';
import Welcome from './Welcome'
import CurrentTime from './CurrentTime'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.data = {
            name: "John Doe",
            date: date => date.toLocaleTimeString()
        };
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
                <Welcome name={ this.data.name } />
                <CurrentTime date={ this.data.date(this.state.date) } />
            </div>
        );
    }
}