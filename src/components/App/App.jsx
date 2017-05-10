import React, { Component } from 'react';
import './App.css';
import Clock from '../Clock/Clock';
import Stopwatch from '../Stopwatch/Stopwatch';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25 2017',
            newDeadline: '',
            timer: 200,
            newTimer: 0
        };
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }



    render() {
        return (
            <div className="App">
                <div className="App-title"> Countdown to {this.state.deadline}</div>
                {/**<Clock
                    deadline={this.state.deadline}
                />
                <div>
                    <input
                        type="text"
                        placeholder="New Date"
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={() => this.changeDeadline()}>Submit</button>
                </div>*/}
                <div className="Stopwatch-title"> StopWatch {this.state.timer}</div>
                <Stopwatch
                    timer={this.state.timer}
                />
                <div>
                    <input
                        type="text"
                        placeholder="Enter time"
                        onChange={event => this.setState({newTimer: event.target.value})}
                    />
                <button onClick={() => this.setState({timer: this.state.newTimer})}>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;
