import React from 'react';
import Welcome from './Welcome'
import CurrentTime from './CurrentTime'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(), 
            updateTick: true
        };
        this.data = {
            name: "John Doe",
            date: date => date.toLocaleTimeString()
        };
        this.handleTick = this.handleTick.bind(this);    }

    // Check after: handleTick is not re-rendering
    handleTick(e) {
        e.preventDefault();
        // incorrect: state is assynchronous
        // this.setState({ updateTick: !this.state.updateTick });
        // correct
        this.setState((state) => ({
            updateTick: !state.updateTick
        }));
    }
    tick() {
        this.setState({ date: new Date() });
    }

    // lifecycle methods
    componentWillMount() {
        console.log('[componentWillMount()] - state: %o', this.state);
    }
    componentDidMount() {
        console.debug('[componentDidMount()] - state: %o', this.state);
        this.timer = setInterval(
            () => this.state.updateTick ? this.tick() : null,
            1000
        )
    }
    componentWillUnmount() {
        console.log('[componentWillUnmount()] - state: %o', this.state);
        clearInterval(this.timer);
    }

    // render method
    render() {
        return (
            <div>
                <Welcome name={ this.data.name } />
                <CurrentTime date={ this.data.date(this.state.date) } />
                <BtnHandleTick handleClick={ this.handleTick } tickStatus={ this.state.updateTick } />
            </div>
        );
    }
}

function BtnHandleTick(props) {
    console.log('[BtnHandleTick]. ');
    return (
        <a href="#" onClick={props.handleClick}>
            { props.tickStatus ? 'stop' : 'start'} the clock
        </a>
    )
}